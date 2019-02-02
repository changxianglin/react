import React, { Component } from 'react'
import './style.css'

export default class Loading extends Component {
  render() {
    return (
      <div className = 'loading'>
        <div className = 'loading__img'></div>
        <span>正在加载...</span>
      </div>
    )
  }
}
