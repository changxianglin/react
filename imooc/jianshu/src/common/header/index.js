import React from 'react'
import  { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwith,
    SearchInfoItem,
    SearchInfoList,
    Addition,
    Button,
} from './style'


const getListArea = (show) => {
  if(show) {
    return (
      <SearchInfo>
      <SearchInfoTitle>
        热门搜索
        <SearchInfoSwith>换一批</SearchInfoSwith>
      </SearchInfoTitle>
      <SearchInfoList>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
      </SearchInfoList>
    </SearchInfo>
    )
  } else {
    return null
  }
}

const Header = (props) => {
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
                in = {props.focused}
                timeout = {200}
                classNames = 'slide'
              >
                <NavSearch 
                onBlur = {props.handleInputBlur}
                onFocus = {props.handleInputFocus} 
                className = {props.focused ? 'focused' : ''}>
                </NavSearch>
                </CSSTransition>
                <i className = {props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6cf;</i>
                {
                  getListArea(props.focused)
                }
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

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDisptchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Header)