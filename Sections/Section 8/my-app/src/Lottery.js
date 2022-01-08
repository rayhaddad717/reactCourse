import React, { Component } from 'react'
import Lotto from './Lotto'
import './Lottery.css'
class Lottery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ballNumbers: Array.from({ length: this.props.numBalls })
        }
        this.generateBalls = this.generateBalls.bind(this);
    };
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 41
    };
    generateBalls() {
        const balls = [];
        const { numBalls } = this.props;
        for (let i = 0; i < numBalls; i++) {
            balls.push(Math.floor(Math.random() * this.props.maxNum) + 1)
        }
        this.setState({ ballNumbers: balls })

        //Or
        //this.setState(state => {return state.ballNumbers.map(nb => Math.floor(Math.random() * this.props.maxNum)+1)})
    }
    render() {
        return (
            <div className="Lottery">
                <h2>{this.props.title}</h2>
                <div>
                    {this.state.ballNumbers.map(ball => (<Lotto ballNumber={ball} />))}
                </div>
                <button onClick={this.generateBalls}>Generate Balls</button>
            </div>
        )
    };

};
export default Lottery