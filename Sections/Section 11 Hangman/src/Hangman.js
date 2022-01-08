import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import { randomWord } from './words'
import AlphaButtons from "./AlphaButtons";
import GuessedLetters from "./GuessedLetters";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.setKeyListener();
  };
  setKeyListener() {
    document.addEventListener('keydown', (e) => {
      if (e.key === "R") { this.restart() }
      if (this.state.nWrong === this.props.maxWrong) { return }
      if ('abcdefghijklmnopqrstuvwxyz'.split('').includes(e.key) && !this.state.guessed.has(e.key)) { this.guess(e.key) }
    })
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.guess(ltr);
  }

  guess = (letter) => {
    this.setState(st => ({
      guessed: st.guessed.add(letter),
      nWrong: st.nWrong + (st.answer.includes(letter) ? 0 : 1)
    }));
  }
  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
        key={ltr}
      >
        {ltr}
      </button>
    ));
  }

  handleRestart = () => {
    this.restart();
  }
  restart = () => {
    this.setState(state => {
      return {
        nWrong: 0,
        guessed: new Set(),
        answer: randomWord()
      }
    })
  }

  /** render: render game */
  render() {
    let display = undefined;
    let guess = "";
    this.guessedWord().forEach(letter => { guess = guess + letter });
    if (this.state.answer === guess) {
      return (
        <div className="Hangman">
          <h2>Congrat!</h2>
          <h3>You Won!</h3>
          <button id="Hangman-restart-button-success" onClick={this.handleRestart}>Restart</button>
        </div>
      )
    }
    if (this.state.nWrong < this.props.maxWrong) {
      display =
        <div>

          <p className='Hangman-word'>{this.guessedWord()}</p>
          <p className="Hangman-guesses">{this.state.nWrong} out of {this.props.maxWrong} wrong guesses</p>
          <AlphaButtons handleLetterClick={this.handleGuess} letters={'abcdefghijklmnopqrstuvwxyz'.split('')} guessedLetters={this.state.guessed} />

        </div>;
    } else {
      display =
        <div>
          <p className='Hangman-word'>{this.state.answer}</p>
          <h5>You lose</h5>
          <button id="Hangman-restart-button" onClick={this.handleRestart}>Restart</button>
        </div>;
    }
    let guessedLetters = [];
    this.state.guessed.forEach(letter => {
      if (!this.guessedWord().includes(letter)) {
        guessedLetters.push(letter);
      }
    })
    return (
      <div className='Hangman' >
        <h1>Hangman</h1>
        <div className="Hangman-Container">
          <img src={this.props.images[this.state.nWrong]} alt={`${this.state.nWrong} wrong guesses out of ${this.props.maxWrong}`} />
          <GuessedLetters guessedLetters={guessedLetters} />
        </div>
        {display}
      </div>
    );
  }
}

export default Hangman;
