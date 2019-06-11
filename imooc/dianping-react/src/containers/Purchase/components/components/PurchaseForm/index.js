import React, { Component } from 'react'

export default class PurchaseForm extends Component {
  render() {
    return (
      <div className = 'purchaseFrom'>
        <div className = 'purchaseFrom__warpper'>
          <div className = 'purchaseFrom__row'>
            <div className = 'purchaseFrom__rowLabel'>数量</div>
            <div className = 'purchaseFrom__rowValue'>
              <span className = 'purchaseFrom__counter--dec'
                onClick = {this.handleDecrease}
              >-</span>
              <input className = 'purchaseFrom__quantity' />
              <span className = 'purchaseFrom__counter--inc'
                onClick = {this.handleIncrease}
              >+</span>
            </div>
          </div>
          <div className = 'purchaseFrom__row'>
            <div className = 'purchaseFrom__rowLabel'>小计</div>
            <div className = 'purchaseFrom__rowValue'></div>
          </div>
          <div className = 'purchaseFrom__row'>
            <div className = 'purchaseFrom__rowLabel'>手机号</div>
            <div className = 'purchaseFrom__rowValue'></div>
          </div>
        </div>
      </div>
    )
  }

  handleDecrease = () => {

  }

  handleIncrease = () => {
    
  }
}
