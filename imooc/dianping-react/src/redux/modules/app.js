const initalState = {
  error: null,
}

export const types = {
  CLEARE_ERROR: 'APP/CLEAR_ERROR',
}

// action creators
export const actions = {
  clearError: () => ({
    type: types.CLEARE_ERROR,
  })
}

const reducer = (state = initalState, action) => {
  const { type, error } = action
  if(type === types.CLEARE_ERROR) {
    return {...state, error: null}
  } else if(error) {
    return {...state, error: error}
  }
  return state 
}

// selectors
export const getError = (state) => {
  return state.app.error
}

export default reducer