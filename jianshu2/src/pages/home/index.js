import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store'

import { 
    HomeWrapper, 
    HomeLeft, 
    HomeRight,
    BackTop,
 } from './style'

class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className = "banner-img" src = '//upload.jianshu.io/admin_banners/web_images/4588/c9d175a9865206d371742d53c41ed4a042c5d00b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt = '' />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick = {this.handleScrollTop}>回到顶部</BackTop> : null
                }
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

export const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

export const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow() {
        if(document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.toggleTopShow(true))   
        } else {
            dispatch(actionCreators.toggleTopShow(false))      
        }
    }
})

export default connect(mapStateToProps, mapDispatch)(Home)