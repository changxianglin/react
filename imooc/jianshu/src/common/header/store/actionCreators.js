import axios from 'axios'
import { fromJS } from 'immutable'
import * as constants from './constants'

export const searchFocus = () => ({
  type:  constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      dispatch(changeList(res.data.data))
    }).catch(err => {
      console.error(err)
    })
  }
}