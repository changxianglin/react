import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    postion: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    postion: absoulte;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    background: green;
`