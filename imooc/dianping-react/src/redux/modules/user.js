import url from '../../utils/url'
import {FETCH_DATA} from '../middleware/api'
import { schema } from './entities/orders'

const initialState = {
  orders: {
    isFetching: false,
    ids: [],
    toPayIds: [], //待付款的订单 id
    availableIds: [], // 可使用的订单 id 
    refundIds: [], // 退款订单 id
  },
  currentTab: 0,
}

export const types = {
  // 获取订单列表
  FETCH_ORDERS_REQUEST: 'USER/FETCH_ORDERS_REQUEST',
  FETCH_ORDERS_SUCCESS: 'USER/FETCH_ORDERS_SUCCESS',
  FETCH_ORDERS_FAILURE: 'USER/FETCH_ORDERS_FAILURE',
  // 设置当前选中的 tab
  SET_CURRENT_TAB: 'USER/SET_CURRENT_TAB',
}

export default actions = {
  // 获取订单列表
  loaderOrders: () => {
    return (dispatch, getState) => {
      const { ids } = getState().user.orders
      if(ids.length > 0) {
        return null
      }
      const endpoint = url.getOrders()
      return dispatch(fetchOrders(endpoint))
    }
  },
  // 切换 tab
  setCurrentTab: index => ({
    type: types.SET_CURRENT_TAB,
    index,
  })
}

const fetchOrders = (endpoint) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_ORDERS_REQUEST,
      types.FETCH_ORDERS_SUCCESS,
      types.FETCH_ORDERS_FAILURE
    ],
    endpoint,
    schema,
  }
}) 