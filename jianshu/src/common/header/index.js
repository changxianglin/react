import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearhWrapper } from "./style"

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className = "left active">首页</NavItem>
                <NavItem className = "left">下载App</NavItem>
                <NavItem className = "right">登录</NavItem>
                <NavItem className = "right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearhWrapper>
                    <CSSTransition
                        in = {props.focused}
                        timeout = {200}
                        classNames = "slide"
                    >
                        <NavSearch
                            className = {props.focused ? "focused" : ""}
                            onFocus = {props.handleInputFocus}
                            onBlur = {props.handleInputBlur}
                        >

                        </NavSearch>
                    </CSSTransition>
                    <i className = {props.focused ? "focused iconfont" : "iconfont"}>&#xe6cf;</i>
                </SearhWrapper>
            </Nav>
            <Addition>
                <Button className = "writting">
                    <i className="iconfont">&#xe615;</i>
                    写文章
                </Button>
                <Button className = "reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}

const mapDispatchToProps = (dispath) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search_focus'
            }
            dispath(action)
        },
        handleInputBlur() {
            const action = {
                type: 'search_blur'
            }
            dispath(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)