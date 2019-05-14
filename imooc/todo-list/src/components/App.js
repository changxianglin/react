import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'
import { ifError } from 'assert';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      filter: 'all',
    }
    this.nextTodoId = 0
  }

  render() {
    const todos = this.getVisibleTodos()
    const { filter } = this.state
    return (
      <div>
        <AddTodo addTodo = { this.addTodo } />
        <TodoList todos = { todos } toggleTodo = { this.toggleTodo }/>
        <Footer filter = { filter } setVisibilityFilter = { this.setVisibilityFilter } />
      </div>
    )
  }

  getVisibleTodos = () => {
    const currentFilter = this.state.filter
    return this.state.todos.filter(item => {
      if(currentFilter === 'active') {
        return !item.completed
      } else if(currentFilter === 'completed') {
        return item.completed
      } else {
        return true
      }
    })
  }

  addTodo = text => {
    const todos = {
      id: this.nextTodoId++,
      text,
      completed: false,
    }
    const newTodos = [todos, ...this.state.todos]
    this.setState({
      todos: newTodos
    })
  }

  toggleTodo = id => {
    const newTodos = this.state.todos.map(item => {
      return item.id === id ? { ...item, completed: !item.completed } : item
    })
    this.setState({
      todos: newTodos,
    })
  }

  setVisibilityFilter = filter => {
    this.setState({
      filter,
    })
  }
}
