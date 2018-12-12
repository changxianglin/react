import React, { Component } from 'react';
import {Button} from 'antd'
import { inject, observer} from 'mobx-react'

@inject('TodoStore')
@observer
class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const bird = this.bird.value
    this.props.TodoStore.addBird(bird)
    this.bird.value = ''
  }

  render() {
    const { TodoStore } = this.props
    return (
      <div className="App">
        <h2>You have {TodoStore.birdCount} birds.</h2>
      
        <form onSubmit = { e => this.handleSubmit(e)}>
          <input type = 'text' placeholder = "Enter bird" ref = { input => this.bird = input} />
          <button type="primary">Add bird</button>
        </form>
        {
          TodoStore.birds.map((bird, index) => (
            <Button key = {index}>{bird}</Button>
          ))
        }  
      </div>
    );
  }
}

export default App;
