import { observable, computed, action } from 'mobx'

class postStore {
    @observable flag = []
    @observable icon = [false, false, false, false, false]
    @observable content = [
        {
            id: 1,
            title: '首页',
            icon: '//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png',
            desc: '这是首页的描述',
            instructor: '说些啥比较好呢？',
            content: '校长在机房挖矿导致校园网瘫痪，还栽赃给学生，遭程序员网友怒怼',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4605/1d5cb81933dbb48ab0aa53d481a1300fc5406e7f.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
        {
            id: 2,
            title: '首页',
            icon: '//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png',
            desc: '这是首页的描述',
            instructor: '说些啥比较好呢？',
            content: '校长在机房挖矿导致校园网瘫痪，还栽赃给学生，遭程序员网友怒怼',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4605/1d5cb81933dbb48ab0aa53d481a1300fc5406e7f.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
        {
            id: 3,
            title: '首页',
            icon: '//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png',
            desc: '这是首页的描述',
            instructor: '说些啥比较好呢？',
            content: '校长在机房挖矿导致校园网瘫痪，还栽赃给学生，遭程序员网友怒怼',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4605/1d5cb81933dbb48ab0aa53d481a1300fc5406e7f.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
        {
            id: 4,
            title: '首页',
            icon: '//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png',
            desc: '这是首页的描述',
            instructor: '说些啥比较好呢？',
            content: '校长在机房挖矿导致校园网瘫痪，还栽赃给学生，遭程序员网友怒怼',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4605/1d5cb81933dbb48ab0aa53d481a1300fc5406e7f.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
        {
            id: 5,
            title: '首页',
            icon: '//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png',
            desc: '这是首页的描述',
            instructor: '说些啥比较好呢？',
            content: '校长在机房挖矿导致校园网瘫痪，还栽赃给学生，遭程序员网友怒怼',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4605/1d5cb81933dbb48ab0aa53d481a1300fc5406e7f.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        }
    ]

    @action Toggle = (id) => {
        console.log('click toggle', id)
        if(this.flag.includes(id)) {
            console.log('includes')
            this.flag.splice(id, 1)
            this.icon[id] = !this.icon[id]
        } else {
            console.log('no includes')
            this.icon[id] = !this.icon[id]
            this.flag.push(id)
        }
    }

    @action handleSure = () => {
        console.log(this.flag.length, '选中的个数')
        for(let i = 0; i < this.flag.length; i++) {
            console.log(this.flag[i])
        }
    }
}

export default postStore