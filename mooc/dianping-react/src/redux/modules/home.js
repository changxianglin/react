import { get } from '../../utils/request'
import url from '../../utils/url'
import { FETCH_DATA } from '../middleware/api'
import { schema } from './entities/products'

export const types = {
    // 获取猜你喜欢请求
    FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST", 
    // 获取猜你喜欢请求成功
    FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS",
    // 获取猜你喜欢请求失败 
    FETCH_LIKES_FAILURE: "HOME/FETCH_LIKES_FAILURE",
}

export const actions = {
    loadLikes: () => {
        return (dispatch, getState) => {
            const endpoint = url.getPorductList(0, 10)
            return dispatch(fetchLikes(endpoint))
        }
    }
}

const fetchLikes = (endpoint) => ({
    [FETCH_DATA]: {
        types: [
            types.FETCH_LIKES_REQUEST,
            types.FETCH_LIKES_SUCCESS,
            types.FETCH_LIKES_FAILURE
        ],
        endpoint,
        schema 
    }
})

const reducer = (state = {}, action)  => {
    switch(action.type) {
        case types.fetchLikesRequest:
        // todo
        case types.fetchLikesSuccess: 
        // todo
        case types.fetchLikesFailure:
        // todo
        default:
            return state
    }
}

export default reducer