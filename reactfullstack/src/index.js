import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { 
  BrowserRouter, 
  Route,
  Switch 
 } from 'react-router-dom'
import './config'
import './index.css'

import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducer'
import thunk from 'redux-thunk'

import Login from  './container/login/login.js'
import Register from  './container/register/register.js'
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'
import Geniusinfo from './container/geniusinfo/geniusinfo'
import Dashboard from './component/dashboard/dashboard'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))

// boss genius me msg 4个页面
ReactDOM.render(
  (<Provider store = { store } >
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Switch>
          <Route path = '/bossinfo' component = {BossInfo}></Route>
          <Route path = '/geniusinfo' component = {Geniusinfo}></Route>
          <Route path = "/login" component = {Login}></Route>
          <Route path = "/register" component = {Register}></Route>
          <Route component = {Dashboard}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>),
document.getElementById('root'))