import React, { Component} from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'

import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    SearchWrapper,
 } from './style.js'

 class Header extends Component {

    getListArea () {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
        const newList = list.toJS()
        const pageList = []

       if(newList.length) {
        for(let i = (page - 1 ) * 10; i < page * 10; i++) {
            pageList.push(
                <SearchInfoItem key = {newList[i]}>{newList[i]}</SearchInfoItem>
            )
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
                    <SearchInfoSwitch
                    onClick = {() => handleChangePage(page, totalPage)}
                    >换一批</SearchInfoSwitch>
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
        const { focused, handleInputFocus, handleInputBlur, } = this.props
        return (
            <HeaderWrapper>
                    <Logo />
                    <Nav>
                        <NavItem className = 'left active'>首页</NavItem>
                        <NavItem className = 'left'>下载APP</NavItem>
                        <NavItem className = 'right'>登录</NavItem>
                        <NavItem className = 'right'>
                            <i className = 'iconfont'>&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in = {focused}
                                timeout = {200}
                                classNames = "slide"
                            >
                                <NavSearch
                                    className = {focused ? 'focused' : ''}
                                    onFocus = {handleInputFocus}
                                    onBlur = {handleInputBlur}
                                ></NavSearch>
                            </CSSTransition>
                            <i className = {focused ? 'focused iconfont' : 'iconfont'}>&#xe62b;</i>
                               {
                                   this.getListArea()
                               } 
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className = 'writting'>
                            <i className = 'iconfont'>&#xe624;</i>
                            写文章
                        </Button>
                        <Button className = "reg">注册</Button>
                    </Addition>
                </HeaderWrapper>
        )
     }
 }

const  mapStateToPorps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
    }
}

const mapDispatchToProps = (dispatch) => {
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
        }, 
        handleChangePage(page, totalPage) {
            if(page < totalPage) {
                 dispatch(actionCreators.changePage(page + 1))
            } else {
                 dispatch(actionCreators.changePage(1))
            }
        }
    }
}

export default connect(mapStateToPorps, mapDispatchToProps)(Header)