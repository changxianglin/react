import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

const todos = [
  {
    id: 1,
    text: '学习 react',
    completed: true,
  },
  {
    id: 2,
    text: '学习 redux',
    completed: false,
  },
  {
    id: 3,
    text: '学习 react router',
    completed: false,
  },
]

const filter = 'all'

export default class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList todos = { todos }/>
        <Footer filter = { filter } />
      </div>
    )
  }
}
