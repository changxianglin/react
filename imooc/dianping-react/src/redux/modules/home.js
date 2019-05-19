import { get } from '../../utils/request'
import url from '../../utils/url'
import { FETCH_DATA } from '../middleware/api';
import { schema } from '../middleware/api'

export const types = {
  FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST", //获取猜你喜欢请求
  FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS", //获取猜你喜欢请求成功
  FETCH_LIKES_FAILURE: "HOME/FETCH_LIKES_FAILURE", //获取猜你喜欢请求失败
}

export const actions = {
  loadLikes: () => {
    return (dispatch, getState) => {
      const endpoint = url.getProductList(0, 10)
      return dispatch(fetchLikes(endpoint))
    }
  }
}

const fetchLikes = (endpoint) => ({
  [FETCH_DATA]: {
    types: [
      type.FETCH_LIKES_REQUEST,
      type.FETCH_LIKES_SUCCESS,
      type.FETCH_LIKES_FAILURE,
    ],
    endpoint,
    schema,
  }
})

const reducer = (state = {}, action) => {
  switch(action.type) {
    case types.FETCH_LIKES_REQUEST:
    case types.FETCH_LIKES_SUCCESS:
    case types.FETCH_LIKES_FAILURE:
    default:
      return state
  }
}

export default reducer