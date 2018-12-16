import React, { Component } from 'react';
import A from './components/A'
import B from './components/B'
import C from './components/C'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <A />
        <B />
        <C />
      </div>
    );
  }
}

export default App;
