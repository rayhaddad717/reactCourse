import React, { Component } from 'react'
class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.colors = ['#6622CC', '#50514F', '#FFE066', '#2DC2BD', '#44BBA4', '#E7BB41', '#E7E5DF', '#393E41', '#E28413', '#FBF5F3'];
        this.state = {
            colorIndex: Math.floor(Math.random() * this.colors.length)
        }
        this.handleClick = this.handleClick.bind(this)
        this.changeColor = this.changeColor.bind(this)
    };
    handleClick() {
        this.changeColor();
    }
    changeColor() {
        let index = this.state.colorIndex;
        while (index === this.state.colorIndex) {
            index = Math.floor(Math.random() * this.colors.length)
        };
        this.setState({ colorIndex: index })
    }
    render() {
        const styles = {
            backgroundColor: this.colors[this.state.colorIndex],
            width: '100px',
            aspectRatio: '1',
            flexGrow: '1'
        }
        return (
            <div className="color" onClick={this.handleClick} style={styles}>

            </div>
        )
    }
};
export default ColorBox