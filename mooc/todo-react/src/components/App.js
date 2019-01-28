import React, { Component } from "react";
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import FooterContainer from '../containers/FooterContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <AddTodoContainer />
        <TodoListContainer />
        <FooterContainer />
      </div>
    );
  }
}
