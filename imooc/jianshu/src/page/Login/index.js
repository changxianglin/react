import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input } from './style'

class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder = '账号' />
          <Input placeholder = '密码' />
        </LoginBox>
      </LoginWrapper>
    )
  }
}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Login)