import { combineReducers } from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as homeReducer} from '../page/Home/store'
import { reducer as detailReducer } from '../page/Detail/store'
import { reducer as loginReducer } from '../page/Login/store'

const reducer =  combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer,
})

export default reducer