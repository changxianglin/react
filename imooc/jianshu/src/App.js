import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './common/header'
import Home from './page/Home'
import Detail from './page/Detail'
import Test from './Test'
import Scoll from './Scoll'
import Alert from './Alert'
import Modal from './Modal'
import store from './store'

import './index.css'

const App = () => {
  return (
    <Provider store = {store}>
      <div>
        <Header />
        <Router>
          <Switch>
            <Route path = '/' exact component = {Home} />
            <Route path = '/detail' component = {Detail} />
            <Route path = '/modal' component = {Modal} />
          </Switch>
        </Router>   
      </div> 
      {/* <Test /> */}
      {/* <Scoll /> */}
      {/* <Alert /> */}
    </Provider>
  )
}

export default App;
