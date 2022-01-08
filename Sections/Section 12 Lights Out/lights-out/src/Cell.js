import React, { Component } from 'react'
import './Cell.css'
class Cell extends Component {
    constructor(props) {
        super(props);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
    };
    handleChangeStatus(evt) {
        this.props.changeStatus(this.props.index);
    }
    render() {
        const flexBasis = (100 / this.props.numberOfRowsAndColumns * 0.9).toString() + '%';

        const styles = { flexBasis };
        const classStatus = this.props.status ? 'Cell Cell-lit' : 'Cell Cell-off';
        return (
            <div className={classStatus} style={styles} onClick={this.handleChangeStatus}>

            </div>
        )
    }
};
export default Cell;