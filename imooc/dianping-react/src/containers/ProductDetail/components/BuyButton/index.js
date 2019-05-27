import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default class BuyButton extends Component {
  render() {
    const { productId } = this.props
    return (
      <Link className = 'buyButton' to = {`/purchase/${productId}`}>
        立即购买
      </Link>
    )
  }
}
