import axios from 'axios'
import { Modal } from 'antd'

export default class Axios {

    static ajax(option) {
        let baseAPI = 'https://www.easy-mock.com/mock/5c1e6795e8bfa547414a5341/ajax'
        return new Promise((resolve, reject) => {
            axios({
                url: option.url,
                method: 'post',
                baseURL: baseAPI,
                timeout: 5000,
            }).then((response) => {
                if(response.status === 200) {
                    let res = response.data
                    if(res.code === 0) {
                        resolve(res)
                    } else {
                        Modal.info({
                            title: '提示信息',
                            content: res.msg
                        })
                    }
                } else {
                    reject(response)
                }
            })
        })
    }

}