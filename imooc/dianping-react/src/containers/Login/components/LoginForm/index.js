import React, { Component } from 'react'
import './style.css'

export default class LoginForm extends Component {
  render() {
    return (
      <div className = 'loginForm'>
        <div className = 'loginForm__inputContainer'>
          <div className = 'loginForm__row'>
            <label className = 'loginForm__mobileLabel' >86</label>
            <input className = 'loginForm__input' name = 'username' />
          </div>
          <div className = 'loginForm__row'>
              <label className = 'loginForm__passwordLabel' >密码</label>
              <input className = 'loginForm__input' name = 'password' type = 'password' />
          </div>
        </div>
        <div className = 'loginForm__btnContainer'>
          <button className = 'loginForm__btn'>
            登录
          </button>
        </div>
      </div>
    )
  }
}
