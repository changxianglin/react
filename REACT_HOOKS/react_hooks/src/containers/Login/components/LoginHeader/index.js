import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LoginHeader extends Component {
  render() {
    return (
      <div className = "loginHeader">
        <Link to = "/" className = "loginHeader__back"></Link>
        <div className = "loginHeader_title">账号密码登录</div>
      </div>
    )
  }
}

