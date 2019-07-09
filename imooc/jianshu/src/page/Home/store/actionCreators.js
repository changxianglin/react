import axios from 'axios'
import { constants } from './index'

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList:result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      dispatch(changeHomeData(result))
    })
  }
}