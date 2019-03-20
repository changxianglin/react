import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Test demo for router params { this.props.match.params.location }</h1>
      </div>
    )
  }
}
