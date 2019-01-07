import React, { Component } from 'react'
import { 
    HeaderWrapper,
    Logo,
    Nav
 } from './style.js'

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav></Nav>
            </HeaderWrapper>
        )
    }
}

export default Header