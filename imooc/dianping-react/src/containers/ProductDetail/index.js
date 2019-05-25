import React, { Component } from 'react'
import ProductOverview from './components/ProductOverview';
import ShopInfo from './components/ShopInfo'

export default class ProductDetail extends Component {
  render() {
    return (
      <div>
        <ProductOverview />
        <ShopInfo />
      </div>
    )
  }
}
