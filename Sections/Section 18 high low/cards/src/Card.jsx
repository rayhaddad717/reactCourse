import React, { Component } from 'react';
import './Card.css';
class Card extends Component {

    render() {
        const styles = { transform: `rotate(${this.props.rotateAngle}deg)` };

        return (
            <img className="card" src={this.props.imgSrc} style={styles} alt={this.props.imgAlt} />
        )
    };
};

export default Card;