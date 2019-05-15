import { 
  ADD_TODO,
  TOGGLE_TODO,
} from '../action/actionTypes'

const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
          ...state,
          {
            text: action.text,
            completed: false,
          }
        ]
  case TOGGLE_TODO:
    return state.map(
      todo => 
        todo.id === action.id 
        ? { ...todo, completed: !todo.completed }
        : todo
  ) 
  default:
    return state
  }
}

export default todos