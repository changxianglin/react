import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: "社会热点",
        imgUrl: "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }, {
        id: 2,
        title: "手绘",
        imgUrl: "//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
    }],
    articleList: [{
        id: 1,
        title: "霍建华退出微博：生而为人，我劝你嘴下积德",
        desc: "1 昨天，霍建华的华杰工作室在微博和facebook宣布关闭运营账号。 工作室的声明里这样写道：从今以后，只想用最纯粹的方式和大家交流，就是用影...",
        imgUrl: "//upload-images.jianshu.io/upload_images/102559-867f8d0cfbe86f98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    }, {
        id: 2,
        title: "霍建华退出微博：生而为人，我劝你嘴下积德",
        desc: "1 昨天，霍建华的华杰工作室在微博和facebook宣布关闭运营账号。 工作室的声明里这样写道：从今以后，只想用最纯粹的方式和大家交流，就是用影...",
        imgUrl: "//upload-images.jianshu.io/upload_images/102559-867f8d0cfbe86f98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    }, {
        id: 3,
        title: "霍建华退出微博：生而为人，我劝你嘴下积德",
        desc: "1 昨天，霍建华的华杰工作室在微博和facebook宣布关闭运营账号。 工作室的声明里这样写道：从今以后，只想用最纯粹的方式和大家交流，就是用影...",
        imgUrl: "//upload-images.jianshu.io/upload_images/102559-867f8d0cfbe86f98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    }, {
        id: 4,
        title: "霍建华退出微博：生而为人，我劝你嘴下积德",
        desc: "1 昨天，霍建华的华杰工作室在微博和facebook宣布关闭运营账号。 工作室的声明里这样写道：从今以后，只想用最纯粹的方式和大家交流，就是用影...",
        imgUrl: "//upload-images.jianshu.io/upload_images/102559-867f8d0cfbe86f98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    }]
})

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state

    }
}