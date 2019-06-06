import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserMain from './containers/UserMain';
import UserHeader from './component/UserHeader';
import { actions as userActions, getOrders, getCurrentTab } from '../../redux/modules/user'
import { actions as loginActions } from '../../redux/modules/login'

class User extends Component {
  render() {
    const { orders } = this.props
    return (
      <div>
        <UserHeader onBack = {this.handleBack} onLogout = {this.handleLogout} />
        <UserMain  data = {orders} />
      </div>
    )
  }

  componentDidMount() {
    this.props.userActions.loaderOrders()
  }

  handleBack = () => {
    this.props.history.push('/')
  }

  handleLogout = () => {
    this.props.loginActions.logout()
  }

  handleSetCurrentTab = (index) => {
    this.props.userActions.setCurrentTab(index)
  }
}

const mapStateToProps = (state, props) => {
  return {
    orders: getOrders(state),
    currentTab: getCurrentTab(state),
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    loginActions: bindActionCreators(loginActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
