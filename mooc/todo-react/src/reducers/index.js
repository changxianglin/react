import { combineReducers } from 'redux-immutable'

import todos from './todos'
import filter from './filter'
import text from './text'

export default combineReducers({
    todos,
    filter, 
    text
})