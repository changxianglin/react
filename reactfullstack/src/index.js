import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { 
  BrowserRouter, 
  Route, 
  Redirect,
  Switch 
 } from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'

import { createStore, applyMiddleware, compose } from 'redux'
// import { counter } from './index.redux'
import reducers from './reducer'
import thunk from 'redux-thunk';

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))
ReactDOM.render(
  (<Provider store = { store } >
    <BrowserRouter>
    <Switch>
        <Route path = '/login' exact component = {Auth}></Route>
        <Route path = '/dashboard' component = {Dashboard}></Route>
        <Redirect to = '/'></Redirect>
      </Switch>
    </BrowserRouter>
  </Provider>),
document.getElementById('root'))