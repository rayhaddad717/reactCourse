import React, { Component } from 'react'
class ScoreKeeper extends Component {
    constructor() {
        super();
        this.state = {
            score: 0
        }
        this.tripleKill = this.tripleKill.bind(this);
        this.tripleKill2 = this.tripleKill2.bind(this);
        this.tripleKill3 = this.tripleKill3.bind(this);
    };
    tripleKill() {
        this.setState({
            score: this.state.score + 1
        });
        this.setState({
            score: this.state.score + 1
        });
        this.setState({
            score: this.state.score + 1
        });
    };
    tripleKill2() {
        this.setState(st => ({ score: st.score + 1 }));
        this.setState(st => ({ score: st.score + 1 }));
        this.setState(st => ({ score: st.score + 1 }));
    };
    incrementScore(curState) {
        return { score: curState.score + 1 };
    };
    tripleKill3() {
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }
    render() {
        return (
            <div>
                <h1>{this.state.score}</h1>
                <button onClick={this.tripleKill}>TripleKill</button>
                <button onClick={this.tripleKill2}>TripleKill2</button>
                <button onClick={this.tripleKill3}>TripleKill3</button>
            </div>
        )
    }
}
export default ScoreKeeper