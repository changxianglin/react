import React, { Component } from 'react'
import Header from '../../components/Header'
import PurchaseForm from './components/PurchaseForm'

export default class Purchase extends Component {
  render() {
    return (
      <div>
        <Header title = '下单' onBack = {this.handleBack}></Header>
        <PurchaseForm />
      </div>
    )
  }

  handleBack = () => {
    this.props.history.goBack()
  }
}
