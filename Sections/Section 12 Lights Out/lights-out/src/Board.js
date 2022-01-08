import React, { Component } from 'react'
import Cell from './Cell';
import './Board.css'
class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfRowsAndColumns: 3,
            cellStatus: Array.from({ length: 3 }, () => (
                Array.from({ length: 3 }, () => Math.random() < 0.5 ? true : false))),
            gameOver: true
        };
        this.changeStatus = this.changeStatus.bind(this);
        this.getNewStatus = this.getNewStatus.bind(this);
        this.changeDifficulty = this.changeDifficulty.bind(this);
        this.restart = this.restart.bind(this);
    };
    getNewStatus(index) {
        index = parseInt(index);
        const col = index % 10;
        const row = parseInt(index / 10);
        const newCellStatus = [...this.state.cellStatus];
        newCellStatus[row][col] = !this.state.cellStatus[row][col];
        if (row - 1 >= 0) {
            newCellStatus[row - 1][col] = !this.state.cellStatus[row - 1][col];
        }
        if (col - 1 >= 0) {
            newCellStatus[row][col - 1] = !this.state.cellStatus[row][col - 1];
        }
        if (col + 1 < this.state.numberOfRowsAndColumns) {
            newCellStatus[row][col + 1] = !this.state.cellStatus[row][col + 1];
        }
        if (row + 1 < this.state.numberOfRowsAndColumns) {
            newCellStatus[row + 1][col] = !this.state.cellStatus[row + 1][col];
        }
        return newCellStatus;
    }
    changeStatus(index) {

        const newCellStatus = this.getNewStatus(index)
        this.setState(state => {
            return { cellStatus: newCellStatus };
        })
        //if not one cell is turned on then we won the game
        !this.state.cellStatus.some(row => row.includes(true)) && this.setState({ gameOver: true })
    }
    changeDifficulty() {
        document.querySelector('.board-container').classList.add('newBoard')
        setTimeout(() => {

            const difficulty = document.querySelector('#difficulty').value;
            let numberOfRowsAndColumns;
            switch (difficulty) {
                case 'easy': numberOfRowsAndColumns = 3; break;
                case 'medium': numberOfRowsAndColumns = 5; break;
                case 'hard': numberOfRowsAndColumns = 7; break;
                default: numberOfRowsAndColumns = 3;
            }
            this.setState({
                numberOfRowsAndColumns,
                cellStatus: Array.from({ length: numberOfRowsAndColumns }, () => (
                    Array.from({ length: numberOfRowsAndColumns }, () => Math.random() < 0.5 ? true : false)))
            })

        }, 500);
        setTimeout(() => {

            document.querySelector('.board-container').classList.remove('newBoard')
        }, 1000);

    };
    restart() {
        this.setState({
            gameOver: false,
            cellStatus: Array.from({ length: this.state.numberOfRowsAndColumns }, () => (
                Array.from({ length: this.state.numberOfRowsAndColumns }, () => Math.random() < 0.5 ? true : false)))
        })
    }
    render() {
        let board = [];
        if (!this.state.gameOver) {
            for (let i = 0; i < this.state.numberOfRowsAndColumns; i++) {
                for (let j = 0; j < this.state.numberOfRowsAndColumns; j++) {

                    board.push(<Cell numberOfRowsAndColumns={this.state.numberOfRowsAndColumns} key={`${i}${j}`} changeStatus={this.changeStatus} index={`${i}${j}`} status={this.state.cellStatus[i][j]} />)
                }
            }
            board.push()
        } else {
            board.push(<span className="neon-orange">You</span>);
            board.push(<span className="neon-blue">Win!</span>)
            return (
                <div className="Board-win">
                    <span className="neon-orange">You</span>
                    <span className="neon-blue">Win!</span>
                    <button className="Board restartBtn" onClick={this.restart} >Restart</button>

                </div>
            )
        }
        return (
            <div className="Board">
                <div className="game-title"><span className="neon-orange">LIGHTS</span>
                    <span className="neon-blue">OUT</span></div>
                <div className="Board board-container">
                    {board}
                </div>
                <select id="difficulty" defaultValue="easy">
                    <option value="easy" >Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <button className="Board restartBtn" onClick={this.changeDifficulty} >Restart</button>
            </div>
        )


    }
};
export default Board;