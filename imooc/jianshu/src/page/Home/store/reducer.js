import { fromJS } from 'immutable'
import { constants } from './index'

const initialState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})

export default (state = initialState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    default:
      return state
  }
}