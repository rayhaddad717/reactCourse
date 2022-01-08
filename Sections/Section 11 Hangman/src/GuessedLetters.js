import React, { Component } from 'react';
import './GuessedLetters.css'
class GuessedLetters extends Component {
    constructor(props) {
        super(props);

    }
    static defaultProps = {
        guessedLetters: new Set(['a', 'b'])
    }
    render() {

        return (
            <div className="GuessedLetters">
                {this.props.guessedLetters}
            </div>
        )
    }
}
export default GuessedLetters