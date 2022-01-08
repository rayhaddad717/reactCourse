import React, { Component } from 'react'
import './AlphaButtons.css'
class AlphaButtons extends Component {

    constructor(props) {
        super(props);

    };
    static defaultProps = {
        letters: 'abcd'.split('')
    }
    render() {
        const a = this.props.letters.map(letter =>
            <button className="AlphaButtons-btns" disabled={this.props.guessedLetters.has(letter) ? 1 : 0} value={letter} key={letter} onClick={this.props.handleLetterClick}>{letter.toUpperCase()}</button>
        )
        return (
            <div className="AlphaButtons">
                {a}
            </div>
        )
    }
};
export default AlphaButtons