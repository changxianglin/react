import { observable } from 'mobx'

class store {
    @observable title = '开始使用 mobx'
}

export default store = new store()