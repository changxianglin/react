import React, { Component } from 'react'
import Header from '../../components/Header'

export default class Purchase extends Component {
  render() {
    return (
      <div>
        <Header title = '下单' onBack = {this.handleBack}></Header>
      </div>
    )
  }

  handleBack = () => {
    this.props.history.goBack()
  }
}
