import * as constants from './constants'

const initialState = {
  focused: false
}

export default (state = initialState, action) => {
  if(action.type === constants.SEARCH_FOCUS) {
    return {
      focused: true
    }
  }
  if(action.type === constants.SEARCH_BLUR) {
    return {
      focused: false
    }
  }
  return state
}