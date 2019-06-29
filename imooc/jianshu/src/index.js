import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle }  from './style.js';
import { Icon } from './images/iconfont/iconfont'
import App from './App';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <Icon />
    <App />
  </Fragment>, 
document.getElementById('root'));
