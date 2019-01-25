import Axios from 'axios'

class axios {
    static ajax(options) {
        console.log(options.isShowLoading)
        let loading 
        if(options && options.isShowLoading !== false ) {
            loading = document.querySelector('#loading')
            loading.style.display = 'block'
        }
        return new Promise((resolve, reject) => {
            Axios({
                url: options.url,
                methed: 'get',
                timeout: 5000,
            }).then((response) => {
                if(options && options.isShowLoading !== false ) {
                    loading = document.querySelector('#loading')
                    loading.style.display = 'none'
                }
            })
        })
    }
}

export default axios