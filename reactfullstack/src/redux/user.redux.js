import axios from "axios";
import { getRedircetPath } from '../util'


const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOGOUT = 'LOGOUT'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'


const initState = {
  redirectTo: '',
  msg: '',
  user: '', 
  type: '',
}

// reducer
export function user(state = initState, action) {
  switch(action.type){
    case AUTH_SUCCESS:
      return { ...state, msg: '', redirectTo: getRedircetPath(action.payload), ...action.payload } 
    case LOAD_DATA:
      return { ...state, ...action.payload }
    case ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg }
    case LOGOUT:
      return { ...state, redirectTo: '/login' }
    default:
      return state
  }
}

function authSuccess(obj) {
  const { pwd, ...data } = obj
  return { type: AUTH_SUCCESS, payload: data }
}

function errorMsg(msg) {
  return { type: ERROR_MSG, msg: msg}
}

export function loadData(userinfo) {
  return { type: LOAD_DATA, payload: userinfo }
}

export function logoutSubmit() {
  return { type: LOGOUT }
}

export function update(data) {
  return dispatch => {
    axios.post('/user/update', data)
      .then(res => {
        if(res.status === 200 && res.data.code === 0) {
          dispatch(authSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

export function login({user, pwd}) {
  if(!user || !pwd) {
    return errorMsg('用户名密码必须填写')
  }

  return dispatch => {
    axios.post('/user/login', { user, pwd })
    .then(res => {
      if(res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

export function register({ user, pwd, repeatpwd, type }) {
  if(!user || !pwd || !type) {
    return errorMsg('用户名密码必须填写')
  }
  if(pwd !== repeatpwd) {
    return errorMsg('密码和确认密码不同')
  }

  return dispatch => {
    axios.post('/user/register', { user, pwd, type })
    .then(res => {
      if(res.status === 200 && res.data.code === 0) {
        dispatch(authSuccess({ user, pwd, type }))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}