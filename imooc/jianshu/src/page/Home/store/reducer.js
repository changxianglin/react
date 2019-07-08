import { fromJS } from 'immutable'

const initialState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },{
    id: 2,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }],
  articleList: [{
    id: 1,
    title: '鬼知道这些程序员在网吧写代码时都经历了什么',
    desc: '在网吧写代码是怎样一种体验？ @Vivu 装完开发环境，重启，没了 @落在起风的地方 写了个哈喽沃德 哎 打刀塔吧 @Debby 去网吧花两个小...',
    imgUrl: '//upload-images.jianshu.io/upload_images/17128869-1f4a92053c97e33c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 2,
    title: '鬼知道这些程序员在网吧写代码时都经历了什么',
    desc: '在网吧写代码是怎样一种体验？ @Vivu 装完开发环境，重启，没了 @落在起风的地方 写了个哈喽沃德 哎 打刀塔吧 @Debby 去网吧花两个小...',
    imgUrl: '//upload-images.jianshu.io/upload_images/17128869-1f4a92053c97e33c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 3,
    title: '鬼知道这些程序员在网吧写代码时都经历了什么',
    desc: '在网吧写代码是怎样一种体验？ @Vivu 装完开发环境，重启，没了 @落在起风的地方 写了个哈喽沃德 哎 打刀塔吧 @Debby 去网吧花两个小...',
    imgUrl: '//upload-images.jianshu.io/upload_images/17128869-1f4a92053c97e33c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 4,
    title: '鬼知道这些程序员在网吧写代码时都经历了什么',
    desc: '在网吧写代码是怎样一种体验？ @Vivu 装完开发环境，重启，没了 @落在起风的地方 写了个哈喽沃德 哎 打刀塔吧 @Debby 去网吧花两个小...',
    imgUrl: '//upload-images.jianshu.io/upload_images/17128869-1f4a92053c97e33c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }],
  recommendList: [{
    id: 1,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
  }, {
    id: 2,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
  }]
})

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}