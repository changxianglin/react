import { combineReducers } from 'redux'
import url from '../../utils/url'
import { FETCH_DATA } from '../middleware/api';
import { schema } from './entities/products'

export const params = {
  PATH_LIKES: 'likes',
  PATH_DISCOUNTS: 'discounts',
  PAGE_SIZE_LIKES: 5,
  PAGE_SIZE_DISCOUNTS: 3,
}

export const types = {
  FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST", //获取猜你喜欢请求
  FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS", //获取猜你喜欢请求成功
  FETCH_LIKES_FAILURE: "HOME/FETCH_LIKES_FAILURE", //获取猜你喜欢请求失败

  FETCH_DISCOUNT_REQUEST: "HOME/FETCH_DISCOUNT_REQUEST", //获取超值特惠请求
  FETCH_DISCOUNT_SUCCESS: "HOME/FETCH_DISCOUNT_SUCCESS", //获取超值特惠请求成功
  FETCH_DISCOUNT_FAILURE: "HOME/FETCH_DISCOUNT_FAILURE", //获取超值特惠请求失败
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
  // 加载猜你喜欢
  loadLikes: () => {
    return (dispatch, getState) => {
      const {pageCount} = getState().home.likes
      const rowIndex = pageCount * params.PAGE_SIZE_LIKES
      const endpoint = url.getProductList(params.PATH_LIKES, rowIndex, params.PAGE_SIZE_LIKES)
      return dispatch(fetchLikes(endpoint))
    }
  },
  // 加载超值特惠
  loadDiscounts: () => {
    return (dispatch, getState) => {
      const endpoint = url.getProductList(params.PATH_DISCOUNTS, 0, params.PAGE_SIZE_DISCOUNTS)
      return dispatch(fetchDiscounts(endpoint))
    }
  }
}

const fetchLikes = (endpoint) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_LIKES_REQUEST,
      types.FETCH_LIKES_SUCCESS,
      types.FETCH_LIKES_FAILURE,
    ],
    endpoint,
    schema,
  }
})

const fetchDiscounts = (endpoint) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_DISCOUNT_REQUEST,
      types.FETCH_DISCOUNT_SUCCESS,
      types.FETCH_DISCOUNT_FAILURE,
    ],
    endpoint,
    schema,
  }
})

const likes = (state = initialState.likes, action) => {
  switch(action.type) {
    case types.FETCH_LIKES_REQUEST:
      return {...state, isFetching: true}
    case types.FETCH_LIKES_SUCCESS:
      console.log(action, 'likes response')
      return {...state, isFetching: false, pageCount: state.pageCount + 1, ids: state.ids.concat(action.response.id)}
    case types.FETCH_LIKES_FAILURE:
      return {...state, isFetching: false}
    default: 
      return state
  }
}

const discounts = (state = initialState.discounts, action) => {
  switch(action.type) {
    case types.FETCH_DISCOUNT_REQUEST:
      return {...state, isFetching: true}
    case types.FETCH_DISCOUNT_SUCCESS:
      console.log(action, 'discounts response')
      return {...state, isFetching: false, ids: state.ids.concat(action.response.id)}
    case types.FETCH_DISCOUNT_FAILURE:
      return {...state, isFetching: false}
    default: 
      return state
  }
}



const reducer = combineReducers({
  likes,
  discounts,
})

export default reducer


// selectors

export const getLikes = (state) => {
  return state.home.likes.ids.map(id => {
    return state.entities.products[id]
  }) 
}

export const getDiscounts = (state) => {
  return state.home.discounts.ids.map(id => {
    return state.entities.products[id]
  })
}

export const getPageCountOfLikes = (state) => {
  return state.home.likes.pageCount
}