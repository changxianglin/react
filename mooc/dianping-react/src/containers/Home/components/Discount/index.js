import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default class Discount extends Component {
  render() {
    const { data } = this.props
    return (
      <div className = 'discount'>
        <a className = 'discount__header'>
            <span className = 'discount__title'>超级特惠</span>
            <span className = 'discount__more'>更多优惠</span>
            <span className = 'discount__arrow' />
        </a>
        <div className = 'discount__content'>
        {
            data.map((item, index) => {
                return (
                    <Link to = {`/detail/${item.id}`} key = {item.id} className = 'discount__item'>
                    <div className = 'discount__itemPic'>
                        <img width = '100%' height = '100%' src = {item.picture} alt = '' />
                    </div>
                    <div className = 'discount__itemTitle'>
                        {item.shop}
                    </div>
                    <div className = 'discount__itemPriceWrapper'>
                        <ins className = 'discount__itemCurrentPrice'>
                            {item.currentPrice}
                        </ins>
                        <del className = 'discount__itemOldPrice'>
                            {item.oldPrice}
                        </del>
                    </div>
                </Link>
                )
            })
        }
        </div>
      </div>
    )
  }
}
