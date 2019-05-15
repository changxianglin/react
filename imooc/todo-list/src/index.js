import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))
 
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  , document.getElementById('root'));
