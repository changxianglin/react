import React, { Component } from 'react';
import './App.css';
import { Table, Card } from 'antd'
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
      this.setState({
        test: res.data.data.list
      })
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
      <Card>
        <Table dataSource = {this.state.test} pagination = {false} bordered columns = {columns} />
      </Card>
      </div>
    );
  }
}

export default App;
