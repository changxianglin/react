import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import stores from './stores'
import { Provider } from 'mobx-react'

import MRoute from './router'

// ReactDOM.render(
//   <Provider { ...stores}>
//     <App />
//   </Provider>
//   ,
//   document.getElementById('root'));

ReactDOM.render(<MRoute />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
