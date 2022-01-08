import React, { Component } from 'react'
import './CoinCounter.css'
class CoinCounter extends Component {
    constructor(props) {
        super(props);
    };
    static defaultProps = {
        headFlips: 0,
        tailFlips: 0
    };
    render() {
        const { props } = this;
        return (
            <div className="coinCounter">
                <span>Out of {props.headFlips + props.tailFlips} flips, there have been {props.headFlips} heads and {props.tailFlips} tails.</span>
            </div>
        )
    }
}
export default CoinCounter;