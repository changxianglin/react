import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { 
  BrowserRouter, 
  Route, 
  Redirect,
  Switch 
 } from 'react-router-dom'
import './config'

import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducer'
import thunk from 'redux-thunk';

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))

ReactDOM.render(
  (<Provider store = { store } >
    <BrowserRouter>
    </BrowserRouter>
  </Provider>),
document.getElementById('root'))