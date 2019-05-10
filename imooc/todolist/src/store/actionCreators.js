import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TO_ITEM } from './actionTypes'

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