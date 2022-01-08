import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"]
  };
  render() {
    let className = "fas fa-dice-" + this.props.numberWords[this.props.val - 1] + (this.props.locked ? " Die-locked Die" : " Die");
    if (this.props.areDiceRolling && !this.props.locked) {
      className += " Die-rolling";
      return (
        <i
          className={className} disabled></i>

      )
    }
    return (
      <i
        className={className}
        disabled={this.props.disabled}
        onClick={() => { this.props.handleClick(this.props.idx) }}
      >

      </i>
    );
  }
}

export default Die;
