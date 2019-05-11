import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* fetchUser() {
  try {
    const res = yield axios.get('/api/todolist')
    const action = initListAction(res.data.data)
    yield put(action)
  } catch(e) {
     console.log('/api/todolist 网络请求失败')
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, fetchUser)
}

export default mySaga;