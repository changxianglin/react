import React, { Component } from 'react';
import './App.css';
import { Table } from 'antd'
import axios from 'axios'

class App extends Component {

  state = {
    test: []
  }

  componentDidMount() {
    this.getTestData()
  }

  getTestData = () => {
    axios.get('https://www.easy-mock.com/mock/5c1e6795e8bfa547414a5341/ajax/table').then((res) => {
      console.log(res.data)
    })
  }

  render() {
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];
    return (
      <div className="App">
        <Table dataSource = {this.state.test} columns = {columns} />
      </div>
    );
  }
}

export default App;
