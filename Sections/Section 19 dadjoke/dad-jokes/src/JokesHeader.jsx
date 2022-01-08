import React, { Component } from 'react';
import './JokesHeader.css'
class JokesHeader extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick() {
        this.props.newJokes();
    }
    render() {
        return (
            <div className="JokesHeader">
                <div className="JokesHeader-wrapper">
                    <div className="JokesHeader-title">
                        <span>Dad</span>
                        <span> JOKES</span>
                    </div>
                    <div className="JokesHeader-logo-wrapper">
                        😂
                    </div>
                    <button onClick={this.handleClick} className="JokesHeader-new-jokes-button">New Jokes</button>
                </div>
            </div>
        )
    };
};

export default JokesHeader;