import { fromJS } from 'immutable'
import { constants } from './index'

const defaultState = fromJS({
  title: '不谈恋爱，b事没有',
  content: '<img src = "//upload-images.jianshu.io/upload_images/9059760-5c8c7cd779742351.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/576/format/webp" /><p>但这些事你都没有为我做过，发现他朋友圈满屏都是他的<b>新女朋友</b>，他们一起旅游、兜风、看演唱会，他甚至还为她戒掉了游戏，原来他也会秀恩爱啊。</p><p>但这些事你都没有为我做过，发现他朋友圈满屏都是他的新女朋友，他们一起旅游、兜风、看演唱会，他甚至还为她戒掉了游戏，原来他也会秀恩爱啊。</p><p>但这些事你都没有为我做过，发现他朋友圈满屏都是他的新女朋友，他们一起旅游、兜风、看演唱会，他甚至还为她戒掉了游戏，原来他也会秀恩爱啊。</p><p>但这些事你都没有为我做过，发现他朋友圈满屏都是他的新女朋友，他们一起旅游、兜风、看演唱会，他甚至还为她戒掉了游戏，原来他也会秀恩爱啊。</p>'
})

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
    return state
  }
}