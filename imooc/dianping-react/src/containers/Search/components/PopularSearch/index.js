import React, { Component } from 'react'
import './style.css'

export default class PopularSearch extends Component {
  render() {
    const { data } = this.props
    return (
      <div className = 'popularSearch'>
        {
          data.map((item) => {
            return (
              <span onClick = {this.handleClick.bind(this, item)} key = {item.id} className = 'popularSearch__item'>{item.keyword}</span>
            )
          })
        }
      </div>
    )
  }

  handleClick = (item) => {
    this.props.onClickItem(item)
  }
}
