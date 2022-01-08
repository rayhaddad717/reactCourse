import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
    constructor(props) {
        super(props);
    };
    convertNumber(nb) {
        switch (nb) {
            case 1:
                return 'one';
                break;
            case 2:
                return 'two';
                break;
            case 3:
                return 'three';
                break;
            case 4:
                return 'four';
                break;
            case 5:
                return 'five';
                break;
            case 6:
                return 'six';
                break;

            default:
                break;
        }
    };
    static defaultProps = { number: 1 }
    render() {
        const { number } = this.props;
        return (
            <div className="Die">
                <i className={`fas fa-dice-${this.convertNumber(number)} fa-5x`} size="3x"></i>
            </div>
        )

    }
};
export default Die;