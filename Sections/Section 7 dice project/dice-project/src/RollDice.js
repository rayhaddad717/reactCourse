import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRolling: false,
            numbers: this.initializeNumbers()
        }
        this.roll = this.roll.bind(this);
        this.showButton = this.showButton.bind(this);
    };
    initializeNumbers() {
        const numbersArr = [];
        for (let i = 0; i < this.props.dice; i++) {
            numbersArr.push(this.getRndNumber());
        }
        return numbersArr
    }
    getRndNumber() {
        return Math.floor(Math.random() * 6) + 1;
    }
    roll() {
        this.setState({
            numbers: this.initializeNumbers(),
            isRolling: true
        })
        setTimeout(() => {
            this.setState({ isRolling: false })
        }, 1000);
    };
    showButton() {
        if (this.state.isRolling) {
            return (<button className="RollDice-button" disabled onClick={this.roll}>Rolling...</button>)
        } else {
            return (
                <button className="RollDice-button" onClick={this.roll}>Roll Dice!</button>
            )
        }
    }
    render() {
        return (
            <div className="RollDice">
                <div className={this.state.isRolling ? 'RollDice-rolling ' : ''}  >

                    {this.state.numbers.map(d => (<Die number={d} />))}
                </div>
                {this.showButton()}

            </div >
        )
    }
};
export default RollDice;