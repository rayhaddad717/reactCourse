import React, { Component } from 'react'
import './CoinFlipper.css'
import Coin from './Coin';
import CoinCounter from './CoinCounter';
class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinResult: null,
            headFlips: 0,
            tailFlips: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.flipCoin = this.flipCoin.bind(this);
    };
    flipCoin() {
        if (Math.random() < 0.5) {
            this.setState(currState => ({ headFlips: currState.headFlips + 1, coinResult: 'heads' }));
        } else {
            this.setState(currState => ({ tailFlips: currState.tailFlips + 1, coinResult: 'tails' }));
        }
    }
    handleClick() {
        this.flipCoin();
    }
    render() {
        return (
            <div className="coinFlipper">
                <h1>Lets flip a coin</h1>
                <Coin coinResult={this.state.coinResult} />
                <span onClick={this.handleClick}>Flip Coin!</span>
                <CoinCounter headFlips={this.state.headFlips} tailFlips={this.state.tailFlips} />
            </div>
        )
    }
};
export default CoinFlipper