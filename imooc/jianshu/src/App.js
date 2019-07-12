import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './common/header'
import Home from './page/Home'
import Detail from './page/Detail'
import Login from './page/Login'
import Write from './page/Write'
import Test from './Test'
import Scoll from './Scoll'
import Alert from './Alert'
import Modal from './Modal'
import Mobile from './Mobile'
import Mask from './Mask'
import store from './store'

import './index.css'
import 'antd-mobile/dist/antd-mobile.css'

const App = () => {
  return (
    <Provider store = {store}>
        <Router>
          <Route component = {Header} />
          <Switch>
            {/* <Route component = {Mask} /> */}
            <Route path = '/' exact component = {Home} />
            <Route path = '/detail/:id' component = {Detail} />
            <Route path = '/write' component = {Write} />
            <Route path = '/modal' component = {Modal} />
            <Route path = '/mobile' component = {Mobile} />
            <Route path = '/login' component = {Login} />
          </Switch>
        </Router>   
      {/* <Test /> */}
      {/* <Scoll /> */}
      {/* <Alert /> */}
    </Provider>
  )
}

export default App;
