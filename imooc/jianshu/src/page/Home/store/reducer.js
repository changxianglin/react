import { fromJS } from 'immutable'

const initialState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})

export default (state = initialState, action) => {
  switch(action.type) {
    case 'change_home_data':
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    default:
      return state
  }
}