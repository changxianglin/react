import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { 
  BrowserRouter, 
  Route, 
  Link, 
  Redirect,
  Switch 
 } from 'react-router-dom'
import App from './App'
import Wuying from './Wuying'
import Shuying from './Shuying'
import Test from './Test'

import { createStore, applyMiddleware, compose } from 'redux'
import { counter } from './index.redux'
import thunk from 'redux-thunk';

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
  ))

ReactDOM.render(
  (<Provider store = { store } >
    <BrowserRouter>
      <ul>
        <li>
          <Link to = '/'>曹营</Link>
        </li>
        <li>
          <Link to =  '/wuying'>吴营</Link>
        </li>
        <li>
          <Link to = '/shuying'>蜀营</Link>
        </li>
      </ul>
      <Switch>
        <Route path = '/' exact component = {App}></Route>
        <Route path = '/wuying' component = {Wuying}></Route>
        <Route path = '/shuying' component = {Shuying}></Route>
        <Route path = '/:location' component = {Test}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>),
document.getElementById('root'))