import createReducer from '../../../utils/createReducer'

export const schema = {
  name: 'orders',
  id: 'id',
}

export const USED_TYPE = 1  // 已消费
export const TO_PAY_TYPE = 2  // 待付款
export const AVAILABLE_TYPE = 3  // 可使用 
export const REFUND_TYPE = 4  // 退款

const reducer = createReducer(schema.name)

export default reducer

// selector

export const getOrderById = (state, id) => {
  return state.entities.orders[id]
}