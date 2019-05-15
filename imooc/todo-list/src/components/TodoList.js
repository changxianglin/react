import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Todo from './Todo'

export default class TodoList extends Component {

  render() {
    const { todos, toggleTodo } = this.props
    return (
      <div>
        <ul>
          {
            todos.map(todo => {
              return <Todo key = {todo.id} {...todo} onClick = { () => { toggleTodo(todo.id) }} />
            })
          }
        </ul>
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
}