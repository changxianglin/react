import { get } from '../../utils/request'
import url from '../../utils/url'
import { FETCH_DATA } from '../middleware/api'
import { schema } from './entities/products'

// 请求参数使用到的常量对象
export const params = {
    PATH_LIKES: 'like',
    PATH_DISCOUNTS: 'discounts',
}

export const types = {
    // 获取猜你喜欢请求
    FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST", 
    // 获取猜你喜欢请求成功
    FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS",
    // 获取猜你喜欢请求失败 
    FETCH_LIKES_FAILURE: "HOME/FETCH_LIKES_FAILURE",

    // 获取超值特惠请求
    FETCH_DISCOUNTS_REQUEST: "HOME/FETCH_DISCOUNTS_REQUEST", 
    // 获取超值特惠请求成功
    FETCH_DISCOUNTS_SUCCESS: "HOME/FETCH_DISCOUNTS_SUCCESS",
    // 获取超值特惠请求失败 
    FETCH_DISCOUNTS_FAILURE: "HOME/FETCH_DISCOUNTS_FAILURE",
}

const initialState = {
    likes: {
        isFetching: false,
        pageCount: 0,
        ids: [],
    },
    discounts: {
        isFetching: false,
        ids: [],
    }
}

export const actions = {
    // 加载猜你喜欢的数据
    loadLikes: () => {
        return (dispatch, getState) => {
            const { pageCount } = getState().home.likes
            const rowIndex = pageCount * params.PAGE_SIZE_LIKES
            const endpoint = url.getPorductList(params.PATH_LIKES, rowIndex, params.PAGE_SIZE_LIKES)
            return dispatch(fetchLikes(endpoint))
        }
    },
    loadDiscount: () => {
        return (dispatch, getState) => {
            const endpoint = url.getPorductList(params.PATH_DISCOUNTS, 0, params.PAGE_SIZE_DISCOUNTS)
            return dispatch(fetchDiscounts(endpoint))
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

const fetchDiscounts = (endpoint) => ({
    [FETCH_DATA]: {
        types: [
            types.FETCH_DISCOUNTS_REQUEST,
            types.FETCH_DISCOUNTS_SUCCESS,
            types.FETCH_DISCOUNTS_FAILURE
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