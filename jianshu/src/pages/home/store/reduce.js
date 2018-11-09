import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state

    }
}