import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  actions as userActions,
  getCurrentTab,
  getDeletingOrderId,
} from '../../../../redux/modules/user'
import OrderItem from '../../component/OrderItem'
import './style.css'

const tabTitles = ["全部订单", "待付款", "可使用", "退款/售后"]

class UserMain extends Component {
  render() {
    const { currentTab, data } = this.props
    return (
      <div className = 'userMain'>
        <div className = 'userMain__menu'>
          {
            tabTitles.map((item, index) => {
              return (
                <div key = {index} className = 'userMain__tab' onClick = {this.handleClickTab.bind(this, index)}>
                  <span className = {currentTab === index ? "userMain__title userMain__title--active" : "userMain__title"}>{item}</span>
                </div>
              )
            })
          }
        </div>
        <div className = 'userMain__content'>
          {
            data && data.length > 0 ? this.renderOrderList(data) : this.renderEmpty()
          }
        </div>
      </div>
    )
  }

  renderOrderList = (data) => {
    return data.map(item => {
      return (
        <OrderItem key = {item.id} data = {item} onRemove = {this.handleRemove} />
      )
    })
  }

  // 删除订单
  handleRemove = () => {

  }

  renderEmpty = () => {
    return (
      <div className = 'userMain__empty'>
        <div className = "userMain__emptyIcon"></div>
        <div className = 'userMain__emptyText1'>您还没有相关订单</div>
        <div className = 'userMain__emptyText2'>去逛逛看有哪些想买的</div>
      </div>
    )
  }

  handleClickTab = (index) => {
    this.props.onSetCurrentTab(index)
  }
}

const mapStateToProps = (state, props) => {
  return {
    currentTab: getCurrentTab(state),
    deletingOrderId: getDeletingOrderId(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMain)