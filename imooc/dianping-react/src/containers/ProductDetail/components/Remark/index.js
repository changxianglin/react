import React, { Component } from 'react'
import './style.css'

export default class Remark extends Component {
  render() {
    const {purchaseNotes, validityPeriod} = this.props.data
    return (
      <div className = 'remark'>
        <div className = 'remark__header'>
          购买须知
        </div>
        <i className = 'remark__icon'></i>
        <div className = 'remark__list'>
          <dl className = 'remark__item'>
            <dt className = 'remark__itemTitle'>
              有效期
            </dt>
            <dd className = 'remark__itemDesc'>
              {validityPeriod}
            </dd>
          </dl>
          {purchaseNotes.map((item, index) => {
            return (
              <dl key = {index} className = 'remark__item'>
              <dt className = 'remark__itemTitle'>
                {item.title}
              </dt>
              <dd className = 'remark__itemDesc'>
                {item.content}
              </dd>
            </dl>
            )
          })}
        </div>
      </div>
    )
  }
}
