import React, { Component } from 'react'

export default class UserDetail extends Component {
  render() {
    const { match } = this.props
    return (
      <div>
        UserDetail: {match.params.user}
      </div>
    )
  }
}
