import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameOver: false,
      areDiceRolling: false,
      dice: Array.from({ length: NUM_DICE }, () => Math.floor(Math.random() * 6 + 1)),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      },
      totalScore: 0
    };
    if (!localStorage.getItem('yahtzee-high-score')) {
      localStorage.setItem('yahtzee-high-score', 0);
    }
    this.highScore = localStorage.getItem('yahtzee-high-score')
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.resetGame = this.resetGame.bind(this);

  }
  resetGame() {
    this.setState({
      isGameOver: false,
      areDiceRolling: false,
      dice: Array.from({ length: NUM_DICE }, () => Math.floor(Math.random() * 6 + 1)),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      },
      totalScore: 0
    })
  }
  componentDidMount() {
    this.roll();
  }
  roll(evt) {
    this.setState({ areDiceRolling: true }, () => {
      //to stop the dice animation after 1 second
      setTimeout(() => {
        this.setState(st => ({
          dice: st.dice.map((d, i) =>
            // roll dice whose indexes are in reroll
            st.locked[i] ? d : Math.ceil(Math.random() * 6)
          ),
          locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
          rollsLeft: st.rollsLeft - 1,
          areDiceRolling: false
        }));
      }, 1000);
    })



  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    if (this.state.rollsLeft > 0) {
      this.setState(st => ({
        locked: [
          ...st.locked.slice(0, idx),
          !st.locked[idx],
          ...st.locked.slice(idx + 1)
        ]
      }));
    }
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    const scoreGainedThisRound = ruleFn(this.state.dice);
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: scoreGainedThisRound },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false),
      totalScore: st.totalScore + scoreGainedThisRound,
    }));
    this.setState(st => ({
      //to check if the game is over, it is sufficient to check whether we have an undefined score for a rule
      isGameOver: !Object.values(st.scores).some(e => e === undefined)

    }));
    this.roll();
  }
  displayRollInfo() {
    const messages = [
      "0 Rolls Left",
      "1 Roll Left",
      "2 Rolls Left",
      "Starting Round"
    ];
    return this.state.areDiceRolling ? "Rolling" : messages[this.state.rollsLeft];
  }
  render() {
    const { isGameOver, totalScore, dice, locked, rollsLeft, areDiceRolling, scores } = this.state;
    if (isGameOver && totalScore > this.highScore) {
      localStorage.setItem('yahtzee-high-score', totalScore);
      this.highScore = totalScore;
      alert("you have set a new high score!");
    }
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='App-title'>Yahtzee! </h1>
          {isGameOver &&
            <section>
              <h2 className='game-over'>Game Over!</h2>
              <div className='Game-button-wrapper'><button className='Game-reroll' onClick={this.resetGame}>Play Again?</button></div>
            </section>
          }
          {!isGameOver &&
            <section className='Game-dice-section'>
              <Dice
                dice={dice}
                locked={locked}
                handleClick={this.toggleLocked}
                disabled={rollsLeft === 0}
                areDiceRolling={areDiceRolling}
              />
              <div className='Game-button-wrapper'>
                <button
                  className='Game-reroll'
                  disabled={locked.every(x => x) || rollsLeft === 0 || areDiceRolling}
                  onClick={this.roll}
                >
                  {this.displayRollInfo()}
                </button>
              </div>
            </section>
          }

        </header>
        <ScoreTable highScore={this.highScore} doScore={this.doScore} disabled={this.state.areDiceRolling} scores={scores} totalScore={totalScore} />
      </div>
    );
  }
}

export default Game;
