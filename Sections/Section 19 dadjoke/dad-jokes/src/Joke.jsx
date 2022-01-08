import React, { Component } from 'react';
import './Joke.css'
import '@fortawesome/fontawesome-free/css/all.css';
class Joke extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick(e) {
        this.props.updateJokeScore(this.props.id, e.target.id === 'up');

    }
    render() {
        return (
            <tr className="joke">
                <td className="joke-score-container">
                    <i className='fas fa-arrow-up' id="up" onClick={this.handleClick}></i>
                    <span className="joke-score-circle" style={{ borderColor: this.props.borderColor }}>{this.props.score}</span>
                    <i className='fas fa-arrow-down' id="down" onClick={this.handleClick}></i>
                </td>
                <td className="joke-joke" >{this.props.joke}</td>
                <td className="joke-emoji">{this.props.emoji}</td>
            </tr>

        )
    };
};

export default Joke;