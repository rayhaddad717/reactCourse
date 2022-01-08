import React, { Component } from 'react'
import './CheeZJokes.css';
import JokesContainer from './JokesContainer';
import JokesHeader from './JokesHeader';
import axios from 'axios';
class CheeZJokes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokesIDList: localStorage.getItem('jokesIDList') ? localStorage.getItem('jokesIDList').split(',') : null,
            jokeScores: localStorage.getItem('jokeScores') ? localStorage.getItem('jokeScores').split(',') : null,
            jokes: [],
            isLoading: true,
            willSort: false
        };
        this.newJokes = this.newJokes.bind(this);
        this.updateJokeScore = this.updateJokeScore.bind(this);
    };
    async componentDidMount() {
        const currentJokes = [...this.state.jokes];
        while (currentJokes.length < 10 && !this.state.jokesIDList) {
            const result = await axios.get('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } });
            const { id, joke } = result.data;
            const newJoke = { id, joke };
            if (!currentJokes.includes(newJoke)) {
                currentJokes.push({ ...newJoke, score: 0 });
                if (currentJokes.length === 1) {
                    localStorage.setItem('jokesIDList', newJoke.id);
                    localStorage.setItem('jokeScores', '0');
                } else {
                    localStorage.setItem('jokesIDList', (localStorage.getItem('jokesIDList') + ',' + newJoke.id));
                    localStorage.setItem('jokeScores', `${localStorage.getItem('jokeScores')},0`);
                }

            }

        }
        if (this.state.jokesIDList) {
            for (let jokeID of this.state.jokesIDList) {
                const result = await axios.get(`https://icanhazdadjoke.com/j/${jokeID}`, { headers: { 'Accept': 'application/json' } });
                const { id, joke } = result.data;
                const jokeIndex = this.state.jokesIDList.indexOf(jokeID);
                const newJoke = { id, joke, score: this.state.jokeScores[jokeIndex] };
                currentJokes.push({ ...newJoke });
            }
            this.setState({ jokes: currentJokes, isLoading: false, willSort: true });
            return;
        }

        this.setState({ jokes: currentJokes, jokesIDList: localStorage.getItem('jokesIDList').split(','), jokeScores: localStorage.getItem('jokeScores').split(','), isLoading: false, willSort: true });

    }

    async newJokes() {
        const currentJokes = [...this.state.jokes];
        this.setState({ isLoading: true });
        while (currentJokes.length < this.state.jokes.length + 10) {
            const result = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
            const { id, joke } = result.data;
            if (!this.state.jokesIDList.includes(id)) {
                currentJokes.push({ id, joke, score: 0 });
                localStorage.setItem('jokesIDList', localStorage.getItem('jokesIDList') + ',' + id);
                localStorage.setItem('jokeScores', `${localStorage.getItem('jokeScores')},0`);
            }
        }
        this.setState({ jokes: currentJokes, jokesIDList: localStorage.getItem('jokesIDList').split(','), jokeScores: localStorage.getItem('jokeScores').split(','), isLoading: false, willSort: true });
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.willSort && !this.state.isLoading) {
            const sortedJokes = [...this.state.jokes];
            for (let i = 0; i < sortedJokes.length - 1; i++) {
                let maxScore = parseInt(sortedJokes[i].score);
                let index = null;
                for (let j = i + 1; j < sortedJokes.length; j++) {
                    if (parseInt(sortedJokes[j].score) > maxScore) {
                        maxScore = sortedJokes[j].score;
                        index = j;
                    }
                }
                if (index) {
                    let swap = sortedJokes[i];
                    sortedJokes[i] = sortedJokes[index];
                    sortedJokes[index] = swap;
                }
            }
            this.setState({ jokes: sortedJokes, willSort: false });
        }


    }
    updateJokeScore(jokeID, upvote) {
        const jokeIndex = this.state.jokesIDList.indexOf(jokeID);
        //update jokeScores
        const newJokeScores = localStorage.getItem('jokeScores').split(',');
        newJokeScores[jokeIndex] = upvote ? `${(parseInt(newJokeScores[jokeIndex]) + 1)}` : `${(parseInt(newJokeScores[jokeIndex]) - 1)}`;
        let newJokeScoresString = '';
        for (let jokeScore of newJokeScores) {
            newJokeScoresString += `${jokeScore},`;
        }
        localStorage.setItem('jokeScores', newJokeScoresString.slice(0, newJokeScoresString.length - 1));

        //update joke array
        const newJokes = this.state.jokes.map(joke => {
            return (joke.id === jokeID ? { ...joke, score: newJokeScores[jokeIndex] } : joke)
        })
        this.setState({ jokeScores: localStorage.getItem('jokeScores').split(','), jokes: newJokes, willSort: true });
    }

    render() {

        return (<div className="CheeZJokes">
            <JokesHeader newJokes={this.newJokes} />
            <JokesContainer isLoading={this.state.isLoading} jokes={this.state.jokes} updateJokeScore={this.updateJokeScore} />

            <button onClick={this.newJokes} className="JokesHeader-new-jokes-button-mobile">New Jokes</button>
        </div>
        )
    };
};

export default CheeZJokes;