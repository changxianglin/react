import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createStore } from 'redux'
import { counter } from './index.redux'

const store = createStore(counter)

function render() {
  ReactDOM.render(<App store = { store } />, document.getElementById('root'))
}
render()

store.subscribe(render)