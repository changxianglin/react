import { combineReducers } from 'redux'
import entities from './entities'
import home from './home'
import detail from './detail'
import app from './app'
import search from './search'

const rootReducer = combineReducers({
  entities,
  home,
  detail,
  app,
  search,
}) 

export default rootReducer