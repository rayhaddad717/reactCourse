import React, { Component } from 'react'
class Box extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };
    static defaultProps = {
        height: 0,
        width: 0,
        color: ''
    };
    handleClick() {
        this.props.removeBox(this.props.id);
    }
    render() {
        const boxStyling = {
            height: this.props.height + 'px',
            width: this.props.width + 'px',
            backgroundColor: this.props.color
        };
        return (
            <div className="BoxContainer" >
                <div className="Box" style={boxStyling}></div>
                <button onClick={this.handleClick}>Remove Box</button>
            </div>
        )
    };
};
export default Box