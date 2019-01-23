import { observable, computed, action } from 'mobx'

class postStore {
    @observable content = [
        {
            id: 1,
            title: '首页',
            desc: '这是首页的描述'
        },
        {
            id: 2,
            title: '首页',
            desc: '这是首页的描述'
        },
        {
            id: 3,
            title: '首页',
            desc: '这是首页的描述'
        },
        {
            id: 4,
            title: '首页',
            desc: '这是首页的描述'
        },
        {
            id: 5,
            title: '首页',
            desc: '这是首页的描述'
        }
    ]
}

export default postStore