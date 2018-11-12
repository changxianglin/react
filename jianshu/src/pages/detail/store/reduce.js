import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    title: '我与蒋方舟？',
    content: '<img src="//upload-images.jianshu.io/upload_images/3960383-cdbf5ecea69c8491.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/750/format/webp" alt=""/>\n' +
    '                    <p><b>第一次有人说，我和蒋方舟长得像，其实没太在意，</b>因为这个人，我不认识，我在这里承认自己太low啦……</p>\n' +
    '                    <p>第一次有人说，我和蒋方舟长得像，其实没太在意，因为这个人，我不认识，我在这里承认自己太low啦……</p>\n' +
    '                    <p>第一次有人说，我和蒋方舟长得像，其实没太在意，因为这个人，我不认识，我在这里承认自己太low啦……</p>\n' +
    '                    <p>第一次有人说，我和蒋方舟长得像，其实没太在意，因为这个人，我不认识，我在这里承认自己太low啦……</p>'
})

export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state

    }
}