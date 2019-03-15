import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
// import uuid from 'uuid'

import './App.css';
import About from './components/pages/About';
import Axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({
        todos: res.data
      }))
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  // Delete Todo
  delTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }))
  }

  // Add Todo
  addTodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className = "container">
            <Header />
            <Route path = "/" render = {props => (
              <React.Fragment>
                <AddTodo addTodo = { this.addTodo } />
                <Todos todos = {this.state.todos} 
                markComplete = { this.markComplete }
                delTodo = { this.delTodo }
                />
              </React.Fragment>
            )} />
            <Route path = '/about' component = { About } /> 
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
