import React, { Component } from 'react'
import './style.css'

export default class Remark extends Component {
  render() {
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
              2018-10-20至2019-9-15
            </dd>
          </dl>
          <dl className = 'remark__item'>
            <dt className = 'remark__itemTitle'>
              有效期
            </dt>
            <dd className = 'remark__itemDesc'>
              2018-10-20至2019-9-15
            </dd>
          </dl>
          <dl className = 'remark__item'>
            <dt className = 'remark__itemTitle'>
              有效期
            </dt>
            <dd className = 'remark__itemDesc'>
              2018-10-20至2019-9-15
            </dd>
          </dl>
          <dl className = 'remark__item'>
            <dt className = 'remark__itemTitle'>
              有效期
            </dt>
            <dd className = 'remark__itemDesc'>
              2018-10-20至2019-9-15
            </dd>
          </dl>
          <dl className = 'remark__item'>
            <dt className = 'remark__itemTitle'>
              有效期
            </dt>
            <dd className = 'remark__itemDesc'>
              2018-10-20至2019-9-15
            </dd>
          </dl>
        </div>
      </div>
    )
  }
}
