export const types = {
  SET_ORDER_QUANTITY: 'PURCHASE/SET_ORDER_QUANTITY',
  CLOSE_TIP: 'PURCHASE/CLOSE_TIP',
  // 提交订单相关
  SUBMIT_ORDER_REQUEST: 'PURCHASE/SUBMIT_ORDER_REQUEST',
  SUBMIT_ORDER_SUCCESS: 'PURCHASE/SUBMIT_ORDER_SUCCESS',
  SUBMIT_ORDER_FAILURE: 'PURCHASE/SUBMIT_ORDER_FAILURE',
}

const initialState = {
  quantity: 1,
  showTip: false,
}

// action creator
export const actions = {
  // 设置下单数量
  setOrderQuantity: quantity => ({
    type: types.SET_ORDER_QUANTITY,
    quantity,
  }),
  // 关闭提示弹框
  closeTip: () => ({
    type: types.CLOSE_TIP,
  })
}