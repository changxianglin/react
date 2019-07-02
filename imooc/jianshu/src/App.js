import React from 'react';
import { Provider } from 'react-redux'
import Header from './common/header'
import Test from './Test'
import Scoll from './Scoll'
import store from './store'

const App = () => {
  return (
    <Provider store = {store}>
      <Header />  
      {/* <Test /> */}
      {/* <Scoll /> */}
    </Provider>
  )
}

export default App;
