import React, { Component } from 'react'
import './style.css'

export default class PurchaseForm extends Component {
  render() {
    return (
      <div className = 'purchaseForm'>
        <div className = 'purchaseForm__warpper'>
          <div className = 'purchaseForm__row'>
            <div className = 'purchaseForm__rowLabel'>数量</div>
            <div className = 'purchaseForm__rowValue'>
              <span className = 'purchaseForm__counter--dec'
                onClick = {this.handleDecrease}
              >-</span>
              <input className = 'purchaseForm__quantity'
                onChange = {this.handleChange}
              value = {0} />
              <span className = 'purchaseForm__counter--inc'
                onClick = {this.handleIncrease}
              >+</span>
            </div>
          </div>
          <div className = 'purchaseForm__row'>
            <div className = 'purchaseForm__rowLabel'>小计</div>
            <div className = 'purchaseForm__rowValue'>
              <span className = 'purchaseForm__totalPrice'>￥120.0</span>
            </div>
          </div>
          <div className = 'purchaseForm__row'>
            <div className = 'purchaseForm__rowLabel'>手机号</div>
            <div className = 'purchaseForm__rowValue'>1242348787</div>
          </div>
        </div>
        <div>
          <ul className = 'purchaseForm__remark'>
            <li className = 'purchaseForm__remarkItem'>
              <i className = 'purchaseForm__sign'></i>
              <span className = 'purchaseForm__desc'>支持随时退</span>
            </li>
            <li className = 'purchaseForm__remarkItem'>
              <i className = 'purchaseForm__sign'></i>
              <span className = 'purchaseForm__desc'>支持过期退</span>
            </li>
          </ul>
          <a className = 'purchaseForm__submit' onClick = {this.handleClick}>提交订单</a>
        </div>
      </div>
    )
  }

  handleChange = () => {
    
  }

  handleDecrease = () => {

  }

  handleIncrease = () => {
    
  }

  handleClick = () => {

  }
}
