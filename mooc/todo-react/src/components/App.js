import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

const todos = [
    {
        id: 1,
        text: '学习 React',
        completed: true
    },
    {
        id: 2,
        text: '学习 Redux',
        completed: false
    },
    {
        id: 3,
        text: '学习 React-Router',
        completed: false
    }
]

const filter = 'all'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            filter: 'all',
        }
    }
  render() {
      const todos = this.getVisibleTodos()
      const { filter } = this.props
    return (
      <div className = "App">
        <AddTodo />
        <TodoList todos = {todos} />
        <Footer filter = {filter} />
      </div>
    )
  }

  getVisibleTodos = () => {
      const currentFilter = this.state.filter
      return this.state.todos.filter(item => {
          if (currentFilter === 'active') {
              return !item.completed
          } else if(currentFilter === 'completed') {
            return item.completed
          } else {
              return true
          }
      })
  }
}
