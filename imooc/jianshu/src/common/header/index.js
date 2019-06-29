import React, { Component } from 'react'
import  { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
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
class Header extends Component {
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
              <CSSTransition
                in = {this.props.focused}
                timeout = {200}
                classNames = 'slide'
              >
                <NavSearch 
                onBlur = {this.props.handleInputBlur}
                onFocus = {this.props.handleInputFocus} 
                className = {this.props.focused ? 'focused' : ''}>
                </NavSearch>
                </CSSTransition>
                <i className = {this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6cf;</i>
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

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDisptchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Header)