import { createStore } from 'redux'
import rootReducer from './reducers'
import {
  addTodo,
  toggleTodo,
  setFilter,
  setTodoText,
} from './action'

const store = createStore(rootReducer)

console.log(store.getState())

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addTodo('Learn about actions'))
store.dispatch(toggleTodo(0))
store.dispatch(setFilter('active'))
store.dispatch(setTodoText('Learn'))

unsubscribe()