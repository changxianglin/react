import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked!')
    // DON'T DO THIS this.state.persons[0].name = 'Maximilian'
  }

  render() {
    return (
      <div className = "App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!!!</p>
        <button onClick = {this.switchNameHandler}>Switch Name</button>
        <Person name = "Max" age="28" />
        <Person name = "Manu" age = "29">My Hobbies: </Person>
        <Person  name = "Stephanie" age = "26" />
      </div>
    );
  }
}

export default App;
