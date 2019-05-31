import React, { Component } from 'react'
import './style.css'

export default class SearchHeader extends Component {
  render() {
    const { onBack, onSearch } = this.props
    return (
      <div className = 'searchHeader'>
        <div className = 'searchHeader__back' onClick = {onBack}></div>
        <div className = 'searchHeader__list'>
          <span className = 'searchHeader__item searchHeader__item--selected'>商户</span>
          <span className = 'searchHeader__item'>闪惠团购</span>
        </div>
        <div className = 'searchHeader__icon' onClick = {onSearch}></div>
      </div>
    )
  }
}
