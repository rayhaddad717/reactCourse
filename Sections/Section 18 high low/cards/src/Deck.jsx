import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css'
import { v4 as uuid } from 'uuid';
import '@fortawesome/fontawesome-free/css/all.css'

class Deck extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deckID: '',
            cardsRemaining: 0,
            cards: [],
            currentGuess: undefined,
            gameOver: false,
            score: 0
        };
        this.addCard = this.addCard.bind(this);
        if (!localStorage.getItem('high-low-highScore')) {
            localStorage.setItem('high-low-highScore', 0);
        }
        this.highScore = localStorage.getItem('high-low-highScore');

    }
    async componentDidMount() {
        const result = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/');
        const { deck_id: deckID, remaining: cardsRemaining } = result.data;
        this.setState({ deckID, cardsRemaining });
        this.addCard(false);
    };
    componentDidUpdate(prevProps, prevState) {
        if (this.state.gameOver) { return; }
        const { currentGuess } = this.state;
        const oldCard = prevState.cards.length > 0 ? prevState.cards[prevState.cards.length - 1].code.slice(0, 1) : null;
        const newCard = this.state.cards.length > 0 ? this.state.cards[this.state.cards.length - 1].code.slice(0, 1) : null;
        if (!oldCard || !newCard) {
            return;
        }
        if (currentGuess === 'high' && this.compareCards(oldCard, newCard) < 0) {
            this.setState({ gameOver: true })
        } else if (currentGuess === 'low' && this.compareCards(oldCard, newCard) > 0) {
            this.setState({ gameOver: true })

        } else {
        }

    }
    getRotationAngle() {
        const posAngle = Math.random() * 46;
        return Math.random() < 0.5 ? posAngle : -posAngle;
    }
    async addCard(e) {
        if (this.state.cardsRemaining === 0) {
            alert('you ran out of cards!');
            this.setState({ gameOver: true });
            return;
        }
        const result = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/`);
        const { image, value, suit, code } = result.data.cards[0];
        const { remaining } = result.data;
        const currentGuess = e ? e.target.attributes.name.value : false;
        const newCards = [...this.state.cards, { code, key: uuid(), imgSrc: image, rotateAngle: this.getRotationAngle(), imgAlt: `${value} of ${suit}` }];
        this.setState({ cards: newCards, cardsRemaining: remaining, currentGuess, score: this.state.score + 1 });
    };

    //returns 1 if card2 > card1
    // 0 if card2 == card 1
    // -1 if card1 > card2
    compareCards(card1, card2) {
        if (card1 === card2) { return 0; }
        const cardStrength = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];
        const indexCard1 = cardStrength.indexOf(card1);
        const indexCard2 = cardStrength.indexOf(card2);
        return indexCard1 > indexCard2 ? -1 : 1;

    }


    render() {
        if (this.state.gameOver) {
            if (this.state.score > this.highScore) {
                alert('you set a new high score!');
                this.highScore = this.state.score;
                localStorage.setItem('high-low-highScore', this.state.score);
            }
        }
        return (
            <div className="Deck">
                <h1>&#9826; High Low &#9826;</h1>
                {this.state.gameOver ? <h1>You lose</h1> : null}
                <span className="deck-score"><div>Score: {this.state.score}</div> <div>High Score: {this.highScore}</div></span>
                <div className="deck-cardsContainer">
                    {this.state.cards.map(card => {
                        return (<Card key={card.key} code={card.code} imgSrc={card.imgSrc} rotateAngle={card.rotateAngle} imgAlt={card.imgAlt} />)
                    })}
                </div>
                {!this.state.gameOver ? <div> <i className="fas fa-arrow-up" name="high" onClick={this.addCard}></i>
                    <i className="fas fa-arrow-down" name="low" onClick={this.addCard}></i></div> : <button onClick={() => document.location.reload()}>New Game?</button>}


            </div>
        )
    };
};

export default Deck;