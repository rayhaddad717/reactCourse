import React, { Component } from 'react';
import './Coin.css'

class Coin extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        coinResult: null
    }
    render() {
        if (!this.props.coinResult) {
            return ("");
        } else {
            const source = this.props.coinResult === 'tails' ? 'https://tinyurl.com/react-coin-tails-jpg' : 'https://tinyurl.com/react-coin-heads-jpg';
            return (
                <div class="coin">
                    <img src={source} alt="" class="coinImage" />
                </div>
            )
        }
    }
};
export default Coin