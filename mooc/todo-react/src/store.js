import { createStore } from 'redux'
import rootReducer from './reducers'
import {addTodo, toggleTodo, setFilter, setTodoText} from './action'

const store = createStore(rootReducer)

// 初始 state
console.log(store.getState())

// 订阅 state 的变化
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// 发生 actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(toggleTodo(0))
store.dispatch(setFilter('active'))
store.dispatch(setTodoText('Learn'))

// 取消订阅
unsubscribe()