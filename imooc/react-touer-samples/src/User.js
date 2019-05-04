import React, { Component } from 'react'

export default class User extends Component {
  render() {
    const { match } = this.props
    return (
      <div>
        User: { match.params.user }
      </div>
    )
  }
}
