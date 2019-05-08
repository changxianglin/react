import React, { Component, Fragment } from 'react'
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
        <div className = { this.state.show ? 'show' : 'hide' }>
        Hello
      </div>
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
