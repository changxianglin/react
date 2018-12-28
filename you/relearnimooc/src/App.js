import React, { Component } from 'react';
import './test.less'
import { Button } from 'antd'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <p className = 'test'>test</p>
          <hr />
          <Button>点击一下 antd 按钮</Button>
        </div>
      </div>
    );
  }
}

export default App;
