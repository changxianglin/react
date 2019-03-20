import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createStore, applyMiddleware, compose } from 'redux'
import { counter, addGUN, removeGUN, addGunAsync } from './index.redux'
import thunk from 'redux-thunk';

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
  ))

function render() {
  ReactDOM.render(<App store = { store } addGUN = { addGUN } removeGUN = { removeGUN } addGunAsync = { addGunAsync } />, document.getElementById('root'))
}
render()

store.subscribe(render)