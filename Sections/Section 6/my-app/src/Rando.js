import React, { Component } from 'react'

class Rando extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            gameOver: false
        };
        // this.makeTimer();
        this.play = this.play.bind(this);
    };
    // makeTimer() {
    //     setInterval(() => {
    //         const rand = Math.floor(Math.random() * this.props.maxnum);
    //         this.setState({ num: rand })
    //     }, 1000);
    // }
    play() {
        const rand = Math.floor(Math.random() * 10) + 1;
        if (rand === 7) {
            this.setState({ gameOver: true, num: 7 })
        } else {
            this.setState({ num: rand })
        }
    }
    render() {
        const display = () => {
            if (this.state.gameOver) { return <h1> You won! </h1> }
            else { return <button onClick={this.play}>Random Number</button> }
        }
        return (
            <div>
                <h1>
                    {this.state.num}
                </h1>
                {display()}
            </div>
        )
    }
};

export default Rando