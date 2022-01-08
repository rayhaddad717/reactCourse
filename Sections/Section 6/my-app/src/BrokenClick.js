import React, { Component } from 'react'
class BrokenClick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.i = 0;
    };
    //using arrow functions
    handleClick2 = e => {
        this.setState({ clicked: true })
    }
    handleClick(e) {

        if (this.i % 2 === 0) {
            this.setState({ clicked: true })
        } else {
            this.setState({ clicked: false });
        }
        this.i = this.i + 1;
    }
    render() {
        return (
            <div>
                <h1>{this.state.clicked ? 'Clicked' : 'Not clicked'}</h1>
                <button onClick={this.handleClick2}>Click Me!</button>
            </div>
        )
    }
};
export default BrokenClick;