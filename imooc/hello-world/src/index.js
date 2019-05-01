import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'
import App from './components/App.js';
import loggerMiddleware from './middlewares/logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)))

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
