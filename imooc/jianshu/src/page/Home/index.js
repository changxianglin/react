import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import { 
  HomeWrapper, 
  HomeLeft, 
  HomeRight,
  BackTop,
} from './style'
import { actionCreators } from './store'

class Home extends PureComponent {
  
  handleScrollTop() {
    window.scrollTo(0, 0)
  }

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
        {
          this.props.handleScrollTop ?
          <BackTop onClick = {this.handleScrollTop}>回到顶部</BackTop> 
          : null
        }
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  handleScrollTop: state.getIn(['home', 'showScroll']),
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow () {
    if(document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)