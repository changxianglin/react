import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer, inject } from 'mobx-react'

@inject('TodolistStore')
@observer
class App extends Component {
  render() {
    const { todoList } = this.props.TodolistStore
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> React project</h1>
        </header>
        {todoList.map((entry, i) => <li key = {i}>{entry.msg}</li>)}
      </div>
    );
  }
}

export default App;
