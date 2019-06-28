import React, { Component } from 'react'
import {
    HeaderWrapper,
    Logo,
    Nav
} from './style'
export default class header extends Component {
  render() {
    return (
      <div>
        <HeaderWrapper>
          <Logo href = '/' />
          <Nav>
            
          </Nav>
        </HeaderWrapper>
      </div>
    )
  }
}
