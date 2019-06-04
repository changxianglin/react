import React, { Component } from 'react'
import UserMain from './component/UserMain';
import UserHeader from './component/UserHeader';

export default class User extends Component {
  render() {
    return (
      <div>
        <UserHeader onBack = {this.handleBack} onLogout = {this.handleLogout} />
        <UserMain />
      </div>
    )
  }

  handleBack = () => {

  }

  handleLogout = () => {

  }
}
