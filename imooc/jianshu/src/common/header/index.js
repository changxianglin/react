import React, { Component } from 'react'
import  { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../page/Login/store'
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

class Header extends Component {
  getListArea() {
    const { list, page, totalPage, focused, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = []

    if(newList.length) {
      for(let i = (page - 1) * 10; i < page * 10; i++) {
        if(newList[i]) {
          pageList.push(
            <SearchInfoItem key = {newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }

    if(focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter = {handleMouseEnter}
          onMouseLeave = {handleMouseLeave}
          >
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwith onClick = {() => handleChangePage(page, totalPage, this.spinIcon)}>
            <i ref = {(icon) => {this.spinIcon = icon}} className = 'iconfont spin'>&#xe851;</i>
            换一批
          </SearchInfoSwith>
        </SearchInfoTitle>
        <SearchInfoList>
          {pageList}
        </SearchInfoList>
      </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { handleInputBlur, handleInputFocus, list, focused, login, logout } = this.props
    return (
      <div>
        <HeaderWrapper>
          <Link to = '/'>
            <Logo />
          </Link>
          <Nav>
            <NavItem className = 'left active'>首页</NavItem>
            <NavItem className = 'left'>下载App</NavItem>
            {
              login ? <NavItem className = 'right' onClick = {logout}>退出</NavItem> : 
              <Link to = '/login'><NavItem className = 'right'>登录</NavItem></Link>
            }
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
                onBlur = {handleInputBlur}
                onFocus = {() => handleInputFocus(list)} 
                className = {focused ? 'focused' : ''}>
                </NavSearch>
                </CSSTransition>
                <i className = {focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6cf;</i>
                {
                  this.getListArea()
                }
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to = 'write'>
              <Button className = 'writting'>
                <i className = 'iconfont'>&#xe615;</i>
                写文章
              </Button>
            </Link>
            <Button className = 'reg'>注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDisptchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if(list.size === 0) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if(originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      if(page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    logout () {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Header)