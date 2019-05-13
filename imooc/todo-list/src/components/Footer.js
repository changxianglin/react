import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const { filter } = this.props
    return (
      <div>
        <span>Show: </span>
        <button disabled = { filter === 'all'}>All</button>
        <button disabled = { filter === 'active'}>Active</button>
        <button disabled = { filter === 'completed'}>Completed</button>
      </div>
    )
  }
}
