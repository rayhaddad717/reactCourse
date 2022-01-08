import React, { Component } from 'react'
class Dog extends Component {
    constructor(props) {
        super(props);
    };
    componentDidMount() {
        console.log("mouted")
    }
    componentWillUnmount() {
        console.log("unmouted")
    }
    render() {
        console.log('rendered')
        return (<h1>I'm a dog</h1>
        )
    };
};

export default Dog;