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
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList todos = {todos} />
        <Footer filter = {filter} />
      </div>
    )
  }
}
