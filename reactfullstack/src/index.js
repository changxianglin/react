import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'

import { createStore, applyMiddleware, compose } from 'redux'
import { counter, addGUN, removeGUN, addGunAsync } from './index.redux'
import thunk from 'redux-thunk';

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
  ))

ReactDOM.render(
  (<Provider store = { store } >
    <App />
  </Provider>),
document.getElementById('root'))