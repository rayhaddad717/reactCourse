import React, { Component } from 'react'
import './Lotto.css'
class Lotto extends Component {
    static defaultProps = {
        // ballNumber: 1
    };
    render() {
        const style = { fontSize: '2em', display: 'inline-block' }
        return (
            <div className="Lotto" style={style}>
                {/* <i className={`fa-solid fa-${this.props.ballNumber}`}></i> */}
                {this.props.ballNumber}
            </div>
        )
    }
};
export default Lotto