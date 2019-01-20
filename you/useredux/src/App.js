import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home'
import Login from './pages/login'
import NoMatch from './pages/nomatch'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Route path = '/' exact  component = {Home} />
            <Route path = '/login'  component = {Login} />
            <Route component = {NoMatch} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
