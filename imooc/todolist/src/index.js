import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from './TodoListContainer';
import { Provider } from 'react-redux'
import store from './store'

const App = (
  <Provider store = { store }>
    <TodoListContainer />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
