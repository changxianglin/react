import React, { Component } from 'react'
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
 } from './style'

class Home extends Component {
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
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData()
    }
}

export const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo()
        dispatch(action)
    }
})

export default connect(null, mapDispatch)(Home)