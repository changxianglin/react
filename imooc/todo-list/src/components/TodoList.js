import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {
    const { todos } = this.props
    return (
      <div>
        <ul>
          {
            todos.map(todo => {
              return <Todo key = {todo.id} {...todo} />
            })
          }
        </ul>
      </div>
    )
  }
}
