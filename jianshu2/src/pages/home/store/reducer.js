import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: []
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'change_home_data':
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList),
            }) 
        default:
            return state
    }    
}