import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default class KeywordBox extends Component {
  render() {
    const { text } = this.props
    return (
      <div className = 'keywordBox'>
        <Link to = '/search' className = 'keywordBox__text'>{text}</Link>
      </div>
    )
  }
}
