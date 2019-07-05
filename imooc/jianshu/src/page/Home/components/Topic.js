import React, { Component } from 'react'
import {TopicWrapper, TopicItem } from '../style'

export default class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img
           className = 'topic-pic'
           src = "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt = ''
           />
          热会热点
        </TopicItem>
      </TopicWrapper>
    )
  }
}
