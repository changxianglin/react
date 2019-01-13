import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '热会热点',
        imgUrl: '',
    },{
        id: 2,
        title: '手绘',
        imgUrl: '',
    }],
    articleList: [{
        id: 1,
        title: '阿里程序员吐槽今年倒挂严重，好多应届生听说后直接跑路了！',
        desc: '互联网行业如今发展的可谓是如火如荼，昨天看创业时代说道移动互联网时代将要来临。互联网时代的发展肯定离不开程序员背后的努力，但是最近有一阿里应届程...',
        imgUrl: '//upload-images.jianshu.io/upload_images/9848527-2e2d6249c5cbc3d3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },{
        id: 2,
        title: '阿里程序员吐槽今年倒挂严重，好多应届生听说后直接跑路了！',
        desc: '互联网行业如今发展的可谓是如火如荼，昨天看创业时代说道移动互联网时代将要来临。互联网时代的发展肯定离不开程序员背后的努力，但是最近有一阿里应届程...',
        imgUrl: '//upload-images.jianshu.io/upload_images/9848527-2e2d6249c5cbc3d3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },{
        id: 3,
        title: '阿里程序员吐槽今年倒挂严重，好多应届生听说后直接跑路了！',
        desc: '互联网行业如今发展的可谓是如火如荼，昨天看创业时代说道移动互联网时代将要来临。互联网时代的发展肯定离不开程序员背后的努力，但是最近有一阿里应届程...',
        imgUrl: '//upload-images.jianshu.io/upload_images/9848527-2e2d6249c5cbc3d3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },{
        id: 4,
        title: '阿里程序员吐槽今年倒挂严重，好多应届生听说后直接跑路了！',
        desc: '互联网行业如今发展的可谓是如火如荼，昨天看创业时代说道移动互联网时代将要来临。互联网时代的发展肯定离不开程序员背后的努力，但是最近有一阿里应届程...',
        imgUrl: '//upload-images.jianshu.io/upload_images/9848527-2e2d6249c5cbc3d3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    }],
    recommendList: [{
        id: 1,
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png',
    }, {
        id: 2,
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    }],
    writerList: [{
        id: 1,
        title: 'lostdays',
        desc: '写了194.3k字 · 1.5k喜欢',
    }, {
        id: 2,
        title: '宇文歡',
        desc: '写了194.5k字 · 1.3k喜欢',
    }, {
        id: 3,
        title: 'zhourong',
        desc: '写了194.8k字 · 1.7k喜欢',
    }]
})

export default (state = defaultState, action) => {
    switch(action.type) {  
        default:
            return state
    }    
}