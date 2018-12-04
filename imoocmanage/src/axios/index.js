import JsonP from 'jsonp'
import axios from 'axios'
import {Modal} from 'antd'

export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: "callback"
            }, function(err, response) {
                if(response.status == 'success') {
                    resolve(response)
                } else {
                    reject(response.message)
                }
            })
        })
    }

    static ajax(options) {
        let loading
        if(options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById('ajaxLoading')
            loading.style.display = 'block'
        }
        var baseApi = "https://www.easy-mock.com/mock/5c06a047a2222f2bf0a7b925/mockapi"
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                timeout: 5000,
                params: (options.data && options.data.params) || ""
            }).then((res) => {
                if(options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading')
                    loading.style.display = 'none'
                }
                if(res.status === 200) {
                    let resp = res.data 
                    if(resp.code === 0) {
                        resolve(resp)
                    } else {
                        Modal.info({
                            title: '提示',
                            content: resp.msg                        })
                    }
                } else {
                    reject(res.data)
                }
            })
        })       
    }
}