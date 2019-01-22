import { observable, action } from 'mobx'

class homeStore {
    @observable title = '标题使用 mobx'

    @action changeTitle = () => {
        if(this.title === '标题使用 mobx') {
            this.title = '按钮改变后的 mobx 标题'
        } else {
            this.title = '标题使用 mobx'
        }
        
    }
}

export default homeStore