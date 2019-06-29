import React, { Component } from 'react'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
} from './style'
export default class Header extends Component {
  render() {
    return (
      <div>
        <HeaderWrapper>
          <Logo href = '/' />
          <Nav>
            <NavItem className = 'left active'>首页</NavItem>
            <NavItem className = 'left'>下载App</NavItem>
            <NavItem className = 'right'>登录</NavItem>
            <NavItem className = 'right'>
              <i className = 'iconfont'>&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <NavSearch></NavSearch>
              <i className = 'iconfont'>&#xe6cf;</i>
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className = 'writting'>
              <i className = 'iconfont'>&#xe615;</i>
              写文章
            </Button>
            <Button className = 'reg'>注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }
}
