import React, { Component } from 'react'
import './style.css'

export default class ErrorToast extends Component {
  render() {
    const { msg } = this.props
    return (
      <div className = 'errorToast'>
        <div className = 'errorToast__text'>
          {msg}
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.clearError()
    }, 3000)
  }

  componentWillMount() {
    if(this.timer) {
      clearTimeout(this.timer)
    }
  }
}
