import React, { Component } from 'react'
import { Route } from 'react-router-dom'

export default class User extends Component {
  render() {
    const { match } = this.props
    return (
      <div>
        <Route path = {`${match.path}/:user`} />
        User: { match.params.user}
      </div>
    )
  }
}
