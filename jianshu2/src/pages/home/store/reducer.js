import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '热会热点',
        imgUrl: ''
    }]
})

export default (state = defaultState, action) => {
    switch(action.type) {  
        default:
            return state
    }    
}