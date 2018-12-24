import React, { Component } from 'react';
import './App.css';

import { Button, Input, Form } from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>hello wechat</Button>
        <Form>
        <Input type="text" autoFocus= 'autoFocus' placeholder="Enter your qq#"/>
        </Form>
      </div>
    );
  }
}

export default App;
