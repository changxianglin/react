import React from 'react';
import { Provider } from 'react-redux'
import Header from './common/header'
import Test from './Test'
import Scoll from './Scoll'
import Alert from './Alert'
import store from './store'

const App = () => {
  return (
    <Provider store = {store}>
      <Header />  
      {/* <Test /> */}
      {/* <Scoll /> */}
      {/* <Alert /> */}
    </Provider>
  )
}

export default App;
