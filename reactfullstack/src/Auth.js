import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from './Auth.redux'

@connect(
  state => state.auth,
  {login}
)
class Auth extends Component {
  render() {
    return (
      <div>
        {
          this.props.isAuth ? <Redirect to = '/dashboard'/> : null
        }
        <h1>您没权限，请登录后查看</h1>
        <button onClick = { this.props.login }>Login</button>
      </div>
    )
  }
}

export default Auth