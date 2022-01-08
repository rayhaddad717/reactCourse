import React, { Component } from 'react'
import './RandomColors.css'
import ColorBox from './ColorBox'
class RandomColors extends Component {
    constructor(props) {
        super(props);
        this.colors = ['#6622CC', '#50514F', '#FFE066', '#2DC2BD', '#44BBA4', '#E7BB41', '#E7E5DF', '#393E41', '#E28413', '#FBF5F3'];
        this.state = {
            colorIndeces: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        };
        this.handleClick = this.handleClick.bind(this)
    };
    handleClick() {
        console.log('clicked colro')
    }
    render() {
        return (
            <div className="randomColors">
                {this.state.colorIndeces.map(CI => (<ColorBox />))}

            </div>
        )
    }
}
export default RandomColors;