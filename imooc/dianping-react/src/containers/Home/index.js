import React, { Component } from 'react'
import Category from './components/Category'
import HeadLine from './components/Headline'
import Discount from './components/Discount'
import LikeList from './components/LikeList'
import HomeHeader from './components/HomeHeader';
import Banner from './components/Banner';
import Activity from './components/Activity';
import Footer from '../../components/Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Banner />
        <Category />
        <HeadLine />
        <Activity />
        <Discount />
        <LikeList />
        <Footer />
      </div>
    )
  }
}
