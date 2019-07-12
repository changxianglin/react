import { fromJS } from 'immutable'
import { constants } from './index'

const initialState = fromJS({
  login: false,
})

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.CHNAGE_LOGIN:
      return state.set('login', action.login)
    case constants.LOGOUT:
      return state.set('login', action.logout)
    default: 
      return state
  }
}

export default reducer