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
import thunk from 'redux-thunk'

import Login from  './container/login/login.js'
import Register from  './container/register/register.js'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))

ReactDOM.render(
  (<Provider store = { store } >
    <BrowserRouter>
      <div>
        <Route path = "/login" component = {Login}></Route>
        <Route path = "/register" component = {Register}></Route>
      </div>
    </BrowserRouter>
  </Provider>),
document.getElementById('root'))