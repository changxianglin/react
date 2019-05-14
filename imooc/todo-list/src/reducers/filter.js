import {
  SET_FILTER
} from '../action/actionTypes'

const filter = (state, action) => {
  switch(action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
} 

export default filter