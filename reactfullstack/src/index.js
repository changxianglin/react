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
import './index.css'

import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducer'
import thunk from 'redux-thunk'

import Login from  './container/login/login.js'
import Register from  './container/register/register.js'
import AuthRoute from './component/authroute/authroute'
import BossInfo from './component/bossinfo/bossinfo'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))

function Boss() {
  return <h2>BOSS 页面</h2>
}

ReactDOM.render(
  (<Provider store = { store } >
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Switch>
          {/* <Route path = '/' component = {}></Route> */}
          <Route path = '/bossinfo' component = {BossInfo}></Route>
          <Route path = '/boss' component = {Boss}></Route>
          <Route path = "/login" component = {Login}></Route>
          <Route path = "/register" component = {Register}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>),
document.getElementById('root'))