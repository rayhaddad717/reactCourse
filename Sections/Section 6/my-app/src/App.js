import React, { Component } from 'react'
import './App.css';
import Game from './Game'
import Rando from './Rando'
import Button from './Button'
import BrokenClick from './BrokenClick';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Rando />

      </div>
    );
  };
};

export default App;
