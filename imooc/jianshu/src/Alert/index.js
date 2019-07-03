import React, { Component, Fragment } from 'react'

export default class Alert extends Component {
  render() {
    return (
      <Fragment>
        <div
          onClick = {() => {this.alert1(); this.alert2()}}
        >
        ALERT
        </div>
      </Fragment>
    )
  }

  alert1 = () => {
    alert('111')
  }

  alert2 = () => {
    alert('222')
  }
}
