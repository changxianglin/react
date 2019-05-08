import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }

  render() {
    return (
      <Fragment>
        <CSSTransition
          in = {this.state.show}
          timeout = { 1000 }
          classNames = 'fade'
          onEnter = { (el) => {el.style.color = 'blue'}}
          appear = { true }
        >
        <div>
        Hello
      </div>
      </CSSTransition>
      <button onClick = { this.handleToggle }>Toggle</button>
      </Fragment>
    )
  }

  handleToggle = () => {
    this.setState(() => ({
      show: !this.state.show
    }))
  }
}
