import React, { Component } from 'react'
import './JokesContainer.css';
import Joke from './Joke';
import FlipMove from 'react-flip-move';
class JokesContainer extends Component {
    constructor(props) {
        super(props);
        this.jokeReactions = ['🤣', '😆', '😀', '😐', '🤨', '😠', '😡', '🙂'];
        this.generateJokeProps = this.generateJokeProps.bind(this);
    };
    generateJokeProps(joke) {
        let emoji;
        let bordercolor;
        const score = parseInt(joke.score);
        if (score >= 15) {
            emoji = this.jokeReactions[0];
            bordercolor = "green";
        } else if (score >= 10) {
            emoji = this.jokeReactions[1];
            bordercolor = "green";
        } else if (score >= 5) {
            emoji = this.jokeReactions[2];
            bordercolor = "green";
        } else if (score === 0) {
            emoji = this.jokeReactions[3];
            bordercolor = "yellow";
        } else if (score > 0) {
            emoji = this.jokeReactions[7];
            bordercolor = "yellow";
        } else if (score >= -5) {
            emoji = this.jokeReactions[4];
            bordercolor = "orange";
        } else if (score >= -10) {
            emoji = this.jokeReactions[5];
            bordercolor = "red";
        } else {
            emoji = this.jokeReactions[6];
            bordercolor = "red";
        }

        return <Joke borderColor={bordercolor} key={joke.id} id={joke.id} joke={joke.joke} score={joke.score} emoji={emoji} updateJokeScore={this.props.updateJokeScore} />
    }

    render() {
        const jokes = this.props.isLoading ?
            <i className="fas fa-sync jokes-container-loading-spinner"></i> : <FlipMove>{this.props.jokes.map(this.generateJokeProps)}</FlipMove>;
        return (
            <table>
                <tbody className="JokesContainer">

                    {jokes}

                </tbody>
            </table>
        )
    };
};

export default JokesContainer;