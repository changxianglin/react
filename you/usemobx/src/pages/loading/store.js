import { observable, action } from 'mobx'
import axios from '../../utils/axios'

class loadingStore {
    @observable title = '测试加载'
    @observable content = '请求数据'
    
    @action handleRequest = () => {
        axios.ajax({
            url: 'https://www.easy-mock.com/mock/5c1e6795e8bfa547414a5341/ajax/loading',
            isShowLoading: true,
        }).then(res => console.log(res.data))
    }
}

export default loadingStore