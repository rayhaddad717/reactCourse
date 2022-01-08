import React, { Component } from 'react'
import axios from 'axios';
import './ZenQuote.css';
class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            isLoaded: false
        };
    };
    async componentDidMount() {
        const result = await axios.get('https://api.github.com/zen');
        setTimeout(() => {
            this.setState({ quote: result.data, isLoaded: true });

        }, 3000);
    }


    render() {
        return (
            <div className="">
                {this.state.isLoaded ? <div><h1>Always remember... </h1><p>{this.state.quote}</p> </div>
                    :
                    <div className="loader"> </div>}

            </div>
        )
    }
};
export default ZenQuote;