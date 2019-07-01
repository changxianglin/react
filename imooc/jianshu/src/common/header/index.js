import React, { Component } from 'react'
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

class Header extends Component {
  getListArea() {
    const { list, page } = this.props
    const newList = list.toJS()
    const pageList = []
    for(let i = (page - 1) * 10; i < page * 10; i++) {
      pageList.push(
        <SearchInfoItem key = {newList[i]}>{newList[i]}</SearchInfoItem>
      )
    }
    if(this.props.focused) {
      return (
        <SearchInfo 
          onMouseEnter = {this.props.handleMouseEnter}
          onMouseLeave = {this.props.handleMouseLeave}
          >
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwith>换一批</SearchInfoSwith>
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
                {
                  this.getListArea()
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
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDisptchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
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
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Header)