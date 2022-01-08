import React, { Component } from 'react'
class Button extends Component {
    constructor() {
        super();
    };

    render() {
        return (
            <button onClick={function (e) { alert('clicked') }}>Click Me!</button>
        )
    };
};

export default Button;