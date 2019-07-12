import axios from 'axios'
import { constants } from './index'

const changeLogin = () => ({
  type: constants.CHNAGE_LOGIN,
  login: true
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&passwrod=' + password).then((res) => {
      const result = res.data.data
      if(result) {
        dispatch(changeLogin())
      } else {
        alert('登录失败')
      }
    })
  }
}

export const logout = () => ({
  type: constants.LOGOUT,
  logout: false
})