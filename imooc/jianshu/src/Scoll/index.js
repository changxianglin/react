import React, { Component } from 'react'
import './style.css'

export default class Scoll extends Component {
  render() {
    return (
      <div>
        <div className = 'scoll-header'>
          HEADER
        </div>
        <div className = 'scoll-fill'>
          FILL
        </div>
        <div className = 'scoll-left'>
          LEFT
        </div>
        <div className = 'socll-right'>
          RIGHT
        </div>
      </div>
    )
  }
}
