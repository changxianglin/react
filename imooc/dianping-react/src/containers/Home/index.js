import React, { Component } from 'react'
import Category from './components/Category'
import HeadLine from './components/Headline'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Category />
        <HeadLine />
      </div>
    )
  }
}
