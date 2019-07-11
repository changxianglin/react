import { combineReducers } from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as homeReducer} from '../page/Home/store'
import { reducer as detailReducer } from '../page/Detail/store'

const reducer =  combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
})

export default reducer