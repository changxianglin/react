import { combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'
import text from './text'

export default combineReducers({
  todos,
  text,
  filter,
})