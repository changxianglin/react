import React, { Component } from 'react';
import './App.css';

import { Button, Input, Form } from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';

import axios from './axios'
import { test, todo, have, end } from './service'

const test1 = require('./img/1.jpg')
const test2 = require('./img/2.jpg')
const test3 = require('./img/3.jpg')

class App extends Component {

  state = {
    defTest: 'test',
    defTodo: 'tod0',
    defHave: 'have',
    defEnd: 'end',
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
      url: test + `?prams=${this.state.defTest}`,
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
      url: todo + `?todo=${this.state.defTodo}`
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
      url: have + `?have=${this.state.defHave}`,
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
      url: end + `?end=${this.state.defEnd}`
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
        <hr />
        <img src = {test1} alt = "" />
        <img src = {test2} alt = "" />
        <img src = {test3} alt = "" />
      </div>
    );
  }
}

export default App;
