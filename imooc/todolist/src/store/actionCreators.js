import axios from 'axios'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TO_ITEM, INIT_LIST_ACTION } from './actionTypes'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TO_ITEM,
  index,
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data,
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/api/todolist').then((res) => {
      const data = res.data.data
      const action = initListAction(data)
      dispatch(action)
    })
  }
}