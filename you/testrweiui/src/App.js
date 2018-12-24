import React, { Component } from 'react';
import './App.css';

import { Button, Input, Form } from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';

import axios from './axios'
import { test, todo, have, end } from './service'

class App extends Component {

  state = {
    test: '',
    todo: '',
    have: {
      id: '',
      name: '',
      age: '',
      gender: '',
    },
    end: '',
  }

  handleTest = () => {
    axios.ajax({
      url: test,
    }).then(res => {
      if(res.code == 0) {
        this.setState({
          test: res.data.msg
        })
      }
    })
  }

  handleTodo = () => {
    axios.ajax({
      url: todo
    }).then(res => {
      if(res.code == 0) {
        this.setState({
          todo: res.data.msg
        })
      }
    })
  }

  handleHave = () => {
    axios.ajax({
      url: have,
    }).then(res => {
      if(res.code == 0) {
        console.log(res.data)
        this.setState({
          have: res.data
        })
      }
    })
  }

  handleEnd = () => {
    axios.ajax({
      url: end
    }).then(res => {
      if(res.code == 0) {
        this.setState({
          end: res.data.msg
        })
      }
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
        <hr />
        <span>{this.state.test}</span>
        <span>{this.state.todo}</span>
        <span>{this.state.have.name}</span>
        <span>{this.state.end}</span>
      </div>
    );
  }
}

export default App;
