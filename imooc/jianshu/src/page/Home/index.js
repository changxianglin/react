import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import { 
  HomeWrapper, 
  HomeLeft, 
  HomeRight 
} from './style'
import axios from 'axios'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className = 'banner-img' src = '//upload.jianshu.io/admin_banners/web_images/4675/569882aa7e239c755c754c4d170a859eca26f752.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt = '' />
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
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = {
        type: 'change_home_data',
        topicList:result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      }
      this.props.changeHomeData(action)
    })
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData(action) {
    dispatch(action)
  }
})

export default connect(null, mapDispatch)(Home)