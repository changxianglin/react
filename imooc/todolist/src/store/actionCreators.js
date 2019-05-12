import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM,
  DELETE_ITEM,
} from './actionTypes'

export const changInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
})

export const addItem = () => ({
  type: ADD_ITEM,
})

export const deleteItem = (index) => ({
  type: DELETE_ITEM,
  index,
})