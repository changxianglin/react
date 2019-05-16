import React, { Component } from 'react'
import axios from 'axios'
import qs from 'qs'

export default class AddTodo extends Component {
  render() {
    const { text } = this.props
    return (
      <div>
        <input value = { text } onChange = { this.handleChange } />
        <button onClick = { this.handleClick }>Add</button>
        <button onClick = { this.handleTest }>ADD TEST</button>
      </div>
    )
  }

  handleChange = (e) => {
    const { setTodoText } = this.props
    setTodoText(e.target.value)
  }

  handleClick = () => {
    let queryString = Math.random().toFixed(3) * 1000
    axios.get('/api/test/', {
      params: {
        testId: queryString
      }
    }).then(res => {
      console.log(res.data)
    })
    const { addTodo, text } = this.props
    addTodo(text)
  }

  handleTest = () => {
    const sendData = {
      'name': 'wanger',
      'age': 25,
      'gender': "male",
    }
    axios.post('/api/foo', {
      params: {
        fooId: qs.stringify(sendData)
      }
    }).then(res => {
      console.log(res.data)
    })
  }
}
