import React, { Component } from 'react'
import { ListItem, ListInfo } from '../style'

export default class List extends Component {
  render() {
    return (
      <ListItem>
        <img className = 'pic' src = '//upload-images.jianshu.io/upload_images/17128869-1f4a92053c97e33c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240' alt = '' />
        <ListInfo>
          <h3 className = 'title'>鬼知道这些程序员在网吧写代码时都经历了什么</h3>
          <p className = 'desc'>
      在网吧写代码是怎样一种体验？ @Vivu 装完开发环境，重启，没了 @落在起风的地方 写了个哈喽沃德 哎 打刀塔吧 @Debby 去网吧花两个小...
    </p>
          </ListInfo>
      </ListItem>
    )
  }
}
