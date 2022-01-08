import React, { Component } from 'react'
import './Result.css'
class Result extends Component {
    render() {
        const { result, base_experience } = this.props;
        return (

            <div className="Result">
                <div className={result ? "Result-winner" : "Result-loser"}>{result ? 'Winning Hand' : 'Loosing Hand'}</div>
                Total experience: {base_experience}
            </div>
        )
    }
};
export default Result