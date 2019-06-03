import React, { Component } from 'react'

const tabTitles = ["全部订单", "待付款", "可使用", "退款/售后"]

export default class UserMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 0
    }
  }

  render() {
    const { currentTab } = this.state
    return (
      <div className = 'userMain'>
        <div className = 'userMain__menu'>
          {
            tabTitles.map((item, index) => {
              return (
                <div key = {index} className = 'userMain__tab' onClick = {null}>
                  <span className = {currentTab === index ? "userMain__title userMain__title--active" : "userMain__title"}>{item}</span>
                </div>
              )
            })
          }
        </div>
        <div className = 'userMain__content'></div>
      </div>
    )
  }
}
