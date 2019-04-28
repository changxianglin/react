import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT } from './actionTypes'
let nextTodoId = 0

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
})

export const setFilter = filter => ({
  type: SET_FILTER,
  filter,
})

export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text,
})