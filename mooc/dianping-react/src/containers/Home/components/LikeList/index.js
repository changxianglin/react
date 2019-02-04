import React, { Component } from 'react'
import LikeItem from '../LikeItem'
import Loading from '../../../../components/Loading'
import './style.css'


export default class LikeList extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.removelistener = false
    }
  render() {
      const { data, pageCount } = this.props
    return (
      <div ref={this.myRef} className = 'likeList'>
        <div className = 'likeList__header'>猜你喜欢</div>
        <div className = 'liseList__list'>
            {
                data.map((item, index) => {
                    return <LikeItem key = {index} data = {item} />
                })
            }
        </div>
        {
            pageCount < 3 ? (<Loading />) : (<a className = 'likeList_viewAll'>查看更多</a>)
        }    
      </div>
    )
  }

  componentDidMount() {
      if(this.props.pageCount < 3) {
        document.addEventListener('scroll', this.handleScroll)
      } else {
        this.removelistener = true
      }
      if(this.props.pageCount === 0) {
        this.props.fetchData()
      }
  }

  componentDidUpdate() {
      if(this.props.pageCount >= 3 && !this.removelistener) {
        document.removeEventListener('scroll', this.handleScroll)
        this.removelistener = true
      }
  }

  componentWillUnmount() {
      if(this.removelistener) {
        document.removeEventListener('scroll', this.handleScroll)
      }
  }

// 处理屏幕滚动事件，实现加载更多的效果
  handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const screenHeight = document.documentElement.clientHeight
    const likeListTop = this.myRef.current.offsetTop
    const likeListHeight = this.myRef.current.offsetHeight
    if(scrollTop >= likeListHeight + likeListTop -  screenHeight) {
        this.props.fetchData()
    }
  }
}
