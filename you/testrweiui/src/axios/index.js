import axios from 'axios'
import { Modal } from 'antd'

export default class Axios {
    static ajax(options) {
        const baseURL = 'https://www.easy-mock.com/mock/5c1e6795e8bfa547414a5341/ajax'
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'post',
                baseURL: baseURL,
                timeout: 5000,
            }).then((response) => {
                if(response.status == 200) {
                    const res = response.data
                    if(res.code == 0) {
                        resolve(res)
                    } else {
                        Modal.info({
                            title: '提示',
                            content: res.msg,
                            okText: "确认",
                        })
                    }

                } else {
                    reject(response)
                }
            })
        })
    }
}