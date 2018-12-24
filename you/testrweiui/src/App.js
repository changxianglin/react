import React, { Component } from 'react';
import './App.css';

import { Button, Input, Form } from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';

import axios from './axios'
import { test, todo, have, end } from './service'

class App extends Component {
  handleTest = () => {
    axios.ajax({
      url: test,
    }).then(res => {
      console.log(res.data)
    })
  }

  handleTodo = () => {
    axios.ajax({
      url: todo
    }).then(res => {
      console.log(res.data)
    })
  }

  handleHave = () => {
    axios.ajax({
      url: have,
    }).then(res => {
      console.log(res.data)
    })
  }

  handleEnd = () => {
    axios.ajax({
      url: end
    }).then(res => {
      console.log(res.data)
    })
  }

  render() {
    return (
      <div className="App">
        <Button>hello wechat</Button>
        <Form>
        <Input type="text" autoFocus= 'autoFocus' placeholder="Enter your qq#"/>
        </Form>
        <Button onClick = { this.handleTest }>Test</Button>
        <Button onClick = { this.handleTodo }>Todo</Button>
        <Button onClick = { this.handleHave }>Have</Button>
        <Button onClick = { this.handleEnd }>End</Button>
      </div>
    );
  }
}

export default App;
