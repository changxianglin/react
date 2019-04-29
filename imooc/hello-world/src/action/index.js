import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT, FETCH_TODOS_FAILURE, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS } from './actionTypes'

let nextTodoId = 0

const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST
})

const fetchTodosSuccess = (data) => ({
  type: FETCH_TODOS_SUCCESS,
  data
})

const fetchTodosFailure = (error) => ({
  type: FETCH_TODOS_FAILURE,
  error
})

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequest())
    return fetch('./mock/todos.json').then(
      response => {
        response.json().then(data => {
          dispatch(fetchTodosSuccess(data))
        })
      },
      error => {
        dispatch(fetchTodosFailure(error))
        console.log('An error occurred: ' + error)
      }
    )
  }
}

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