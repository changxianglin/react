import { fromJS } from 'immutable'
import * as constans from './constants'

const text = `<img src = '//upload-images.jianshu.io/upload_images/2535252-21c5ed670bf4e4e2?imageMogr2/auto-orient/strip%7CimageView2/2/w/451/format/webp' alt =''/>
<p><b>昨天，也就是11月15号，马蓉突然在微博上发声，一连发了9条微博，</b>主要内容是对王宝强的“控诉”和“揭露”，截止到目前为止（开始写这篇文章的时候，北京时间2018年11月16号下午六点）这9条微博一共产生了30多万条评论了。</p>
<p>昨天，也就是11月15号，马蓉突然在微博上发声，一连发了9条微博，主要内容是对王宝强的“控诉”和“揭露”，截止到目前为止（开始写这篇文章的时候，北京时间2018年11月16号下午六点）这9条微博一共产生了30多万条评论了。</p>
<p>昨天，也就是11月15号，马蓉突然在微博上发声，一连发了9条微博，主要内容是对王宝强的“控诉”和“揭露”，截止到目前为止（开始写这篇文章的时候，北京时间2018年11月16号下午六点）这9条微博一共产生了30多万条评论了。</p>
<p>昨天，也就是11月15号，马蓉突然在微博上发声，一连发了9条微博，主要内容是对王宝强的“控诉”和“揭露”，截止到目前为止（开始写这篇文章的时候，北京时间2018年11月16号下午六点）这9条微博一共产生了30多万条评论了。</p>`

const defaultState = fromJS({
    title: '马蓉一天发了9条微博，30多万条评论里，很多网友只在乎一件事',
    content: text,
})

export default (state = defaultState, action) => {
    switch(action.type) {
         
        default:
            return state
    }    
}