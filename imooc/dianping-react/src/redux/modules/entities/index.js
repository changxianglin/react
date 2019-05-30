import { combineReducers } from 'redux'
import products from './products'
import shops from './shops'
import orders from './orders'
import comments from './comments'
import keywords from './keywords'

const rootReducer = combineReducers({
  products,
  shops,
  orders,
  comments,
  keywords,
})

export default rootReducer