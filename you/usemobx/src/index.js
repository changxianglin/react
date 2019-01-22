import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import './index.css';
import App from './App';
import store from './store'

const root = document.getElementById('root')

ReactDOM.render(
    <Provider store = { store}>
        <App />
    </Provider>
    ,
root);
