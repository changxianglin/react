import axios from 'axios'
import * as constans from './constants'

const changeHomeData = (result) => ({
    type: constans.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data
            dispatch(changeHomeData(result))
        })  
    }
}