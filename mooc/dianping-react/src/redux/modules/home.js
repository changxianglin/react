import { get } from '../../utils/request'
import url from '../../utils/url'

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
            dispatch(fetchLikesRequest())
            return get(url.getPorductList(0, 10)).then(
                data => {
                    dispatch(fetchLikesSuccess(data))
                },
                error => {
                    dispatch(fetchLikesFailure(error))
                } 
            )
        }
    }
}

const fetchLikesRequest = () => ({
    type: types.FETCH_LIKES_REQUEST
})

const fetchLikesSuccess = (data) => ({
    type: types.FETCH_LIKES_SUCCESS,
    data
})

const fetchLikesFailure = (error) => ({
    type: types.FETCH_LIKES_FAILURE,
    error
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