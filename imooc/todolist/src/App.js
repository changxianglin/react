import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './style.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
        {
          this.state.list.map((item, index) => {
            return (
              <CSSTransition
          timeout = { 1000 }
          classNames = 'fade'
          onEnter = { (el) => {el.style.color = 'blue'}}
          appear = { true }
          key = { index }
        >
              <div>{ item }</div>
          </CSSTransition>
            )
          })
        }
        </TransitionGroup>
      <button onClick = { this.handleAddItem }>Toggle</button>
      </Fragment>
    )
  }

  handleAddItem = () => {
    this.setState((prevState) => ({
      list: [...prevState.list, 'item']
    }))
  }
}
