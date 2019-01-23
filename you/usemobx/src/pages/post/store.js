import { observable, computed, action } from 'mobx'

class postStore {
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
}

export default postStore