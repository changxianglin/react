import { createStore } from 'redux'
import rootReducer from './reducers'
import {addTodo, toggleTodo, setFilter, setTodoText} from './action'

const store = createStore(rootReducer)

// 初始 state
console.log(store.getState())