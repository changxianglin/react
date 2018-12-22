import React, { Component } from 'react';
import './App.css';
import axios from './axios'

class App extends Component {

  handleReques = () => {
    axios.ajax({
      url: '/testajax.json',
    }).then((res) => {
      if(res.code == 0) {
        console.log(res.data)
      }
    })
  }

  handleError = () => {
    axios.ajax({
      url: '/testerror.json'
    }).then((res) => {
      console.log(res)
      if(res.code == 0) {
        console.log(res)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div>封装 ajax 请求</div>
        <button onClick = {this.handleReques}>请求测试</button>
        <button onClick = {this.handleError}>报错的请求</button>
      </div>
    );
  }
}

export default App;
