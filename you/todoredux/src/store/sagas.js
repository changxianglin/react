import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
import { initListAction } from './actionCreators'

function* getInitList() {
    try {
        const res = yield axios.get('https://www.easy-mock.com/mock/5c1e6795e8bfa547414a5341/ajax/thunk')
        const action = initListAction(res.data)
        yield put(action)
    } catch(e) {
        console.log('网络请求失败')
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
  }
  
  export default mySaga;