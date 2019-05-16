import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href = '/home'>Home</a></li>
          <li><a href = '/about'>About</a></li>
          <li><a href = '/contact'>Contact</a></li>
          <li><a href = '/user/1'>User1</a></li>
          <li><a href = '/user/2'>User2</a></li>
        </ul>
      </div>
    )
  }
}
