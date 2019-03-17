import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.handleToggole = this.handleToggole.bind(this)
  }

  render() {
    return (
      <Fragment>
        <CSSTransition
          in = {this.state.show}
          timeout = {1000}
          classNames = 'fade'
          unmountOnExit
          onEnter = {(el) => {el.style.color = 'blue'}}
          appear = {true}
        >
          <div>Hello</div>
        </CSSTransition>
        <button onClick = {this.handleToggole}>Toggle</button>
      </Fragment>
    )
  }

  handleToggole() {
    this.setState({
      show: !this.state.show
    })
  }
}


export default App