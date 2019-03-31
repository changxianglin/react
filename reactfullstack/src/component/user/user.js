import React from 'react'
import { connect } from 'react-redux'
import { Result } from 'antd-mobile'

@connect(
  state => state.user
)
class User extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Result
          img = {<img src = {require(`../img${this.props.avatar}.png`)} alt = '' />}
          title = {this.props.user}
        />
      </div>
    )
  }
}

export default User

