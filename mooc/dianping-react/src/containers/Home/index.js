import React, { Component } from 'react'
import Category from './components/Category'
import Headline from './components/Headline'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Category />
        <Headline />
      </div>
    )
  }
}
