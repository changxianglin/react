import React, { Component } from 'react'

export default class AddTodo extends Component {
  render() {
    const { text } = this.props
    return (
      <div>
        <input value = { text } onChange = { this.handleChange } />
        <button onClick = { this.handleClick }>Add</button>
      </div>
    )
  }

  handleChange = (e) => {
    const { setTodoText } = this.props
    setTodoText(e.target.value)
  }

  handleClick = () => {
    const { addTodo, text } = this.props
    addTodo(text)
  }
}
