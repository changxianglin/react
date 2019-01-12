import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store = {store} >
        <Header />
      </Provider>
    );
  }
}

export default App;
