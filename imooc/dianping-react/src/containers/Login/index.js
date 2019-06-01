import React, { Component } from 'react'
import LoginHeader from './components/LoginHeader';
import LoginForm from './components/LoginForm';

export default class Login extends Component {
  render() {
    return (
      <div>
        <LoginHeader />
        <LoginForm />
      </div>
    )
  }
}
