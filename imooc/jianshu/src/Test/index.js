import React, { Component } from 'react'
import './style.css'

export default class Test extends Component {
  render() {
    return (
      <div>
        <div className = 'test-header'>
          HEADER
        </div>
        <div className = 'test-arrow'>
          ADD
        </div>
        <div className = 'test-content-left'>
          BASIDE
        </div>
        <div className = 'test-content'>
          CONTENT
        </div>
      </div>
    )
  }
}
