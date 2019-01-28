import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import App from './components/App';

// import loggerMiddleware from './middlewares/logger'
import loggerEnhancer from './enhancers/logger'

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, 
    // composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)))
    compose(applyMiddleware(thunkMiddleware), loggerEnhancer))

ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider>, 
document.getElementById('root'));
