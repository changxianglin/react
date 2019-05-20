import React, { Component } from 'react'
import Category from './components/Category'
import HeadLine from './components/Headline'
import Discount from './components/Discount'
import LikeList from './components/LikeList'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Category />
        <HeadLine />
        <Discount />
        <LikeList />
      </div>
    )
  }
}
