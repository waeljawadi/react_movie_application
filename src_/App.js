import React, { Component } from 'react';
import Click from './components/Click'
import Hover from './components/Hover'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Click />
        <Hover />
      </div>
    );
  }
}

export default App;
