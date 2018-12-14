import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer, inject } from 'mobx-react'
import { Button } from 'antd';
import TimerView from './pages/Learn'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Test from './modal'

@inject('TodolistStore')
@observer
class App extends Component {
  render() {
    const { todoList } = this.props.TodolistStore
    console.log(todoList)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> React project</h1>
        </header>
        {todoList.map((entry, i) => <Button key = {i}>{entry.msg}</Button>)}
        <Button>
          <Link to = "/test">Test</Link>
        </Button>
        <Button>
          <Link to = "/view">TimerView</Link>
        </Button>
        {/* <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <hr />
            <Route path="/about" component={TimerView} />
            <Route path="/test" component = {Test} />
          </div>
        </Router> */}
      </div>
    );
  }
}

export default App;
