import React, { Component } from 'react';
import { BrowserRouter, Router, Route} from 'react-router-dom'
import './App.css';
import { Home } from './pages/home'
import { Post } from './pages/post'
import { StyledOut } from './pages/styledout'
import { Tables } from './pages/table'
import { Loading } from './pages/loading'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Route path = '/' exact component = {Home} />
            <Route path = '/post' component = {Post} />
            <Route path = '/style' component = {StyledOut} />
            <Route path = '/tables' component = {Tables} />
            <Route path = '/loading' component = {Loading} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
