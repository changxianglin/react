import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, getUserData } from './Auth.redux'

@connect(
  state => state.auth,
  {login, getUserData}
)
class Auth extends Component {
  componentDidMount() {
    this.props.getUserData()
  }

  render() {
    return (
      <div>
        <h2>我的名字是 {this.props.user}, 年龄是 {this.props.age}</h2>
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