import React, { Component } from 'react'
class NewFormBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxHeight: 0,
            boxWidth: 0,
            boxBackgroundColor: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    };
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

    }
    handleFormSubmit = (e) => {
        this.props.addNewBox(this.state);
        this.state = {
            boxHeight: 0,
            boxWidth: 0,
            boxBackgroundColor: ''
        }
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit} className="NewFormBox">
                <label htmlFor="height">Height: </label>
                <input type="number" name="boxHeight" id="height" onChange={this.handleChange} value={this.state.boxHeight} />
                <label htmlFor="width">Width: </label>
                <input type="number" name="boxWidth" id="width" onChange={this.handleChange} value={this.state.boxWidth} />
                <input type="color" name="boxBackgroundColor" id="backgroundColor" value={this.state.boxBackgroundColor} onChange={this.handleChange} />
                <label htmlFor="backgroundColor">Choose a color for your new Box!</label>
                <button formAction="submit">Add new Box!</button>
            </form>
        )
    }

};
export default NewFormBox;