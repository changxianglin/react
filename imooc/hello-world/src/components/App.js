import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

const todos = [
  {
    id: 1,
    text: "学习react",
    completed: true,
  },
  {
    id: 1,
    text: "学习redux",
    completed: false,
  },
  {
    id: 1,
    text: "学习react router",
    completed: false,
  }
]

const filter = 'all'

export default class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList todos = {todos}/>
        <Footer filter = {filter} />
      </div>
    )
  }
}
