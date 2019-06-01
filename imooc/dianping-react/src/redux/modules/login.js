const inititalState = {
  username: '',
  password: '',
  isFetching: '',
  status: false,
}

// action types
export const types = {
  LOGIN_REQUEST: 'LOGIN/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN/LOGIN_FAILURE',
  LOGOUT: 'LOGIN/LOGOUT',
  SET_USERNAME: 'LOGIN/SET_USERNAME',
  SET_PASSWORD: 'LOGIN/SET_PASSWORD',
}

// action creators
export const actions = {
  // 异步 action, 执行登录
  login: () => {

  }
}