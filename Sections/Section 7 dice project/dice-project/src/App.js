import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import RollDice from './RollDice';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <RollDice dice={4} />
      </div>

    )
  }
}
export default App;
