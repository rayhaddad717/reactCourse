import React, { Component } from 'react'
import NewFormBox from './NewFormBox'
import Box from './Box'
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.addNewBox = this.addNewBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    };
    addNewBox(styles) {
        const newBoxes = [...this.state.boxes, { ...styles, id: uuidv4() }];
        this.setState({ boxes: newBoxes })
    };
    removeBox(boxID) {
        const newBoxes = this.state.boxes.filter(box => box.id !== boxID);
        this.setState({ boxes: newBoxes });
    };
    render() {
        return (
            <div className="BoxList">
                <NewFormBox addNewBox={this.addNewBox} />
                {this.state.boxes.map(box => { return <Box removeBox={this.removeBox} height={box.boxHeight} width={box.boxWidth} id={box.id} key={box.id} color={box.boxBackgroundColor} /> })}
            </div>
        )
    }
};
export default BoxList;