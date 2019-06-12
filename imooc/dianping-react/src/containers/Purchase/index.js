import React, { Component } from 'react'
import Header from '../../components/Header'
import PurchaseForm from './components/PurchaseForm'
import Tip from '../../components/Tip'

export default class Purchase extends Component {
  render() {
    return (
      <div>
        <Header title = '下单' onBack = {this.handleBack}></Header>
        <PurchaseForm />
        <Tip message = '购买成功!' onClose = {this.handleCloseTip} /> 
      </div>
    )
  }

  handleBack = () => {
    this.props.history.goBack()
  }
}
