import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import App from './components/App';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider>, 
document.getElementById('root'));
