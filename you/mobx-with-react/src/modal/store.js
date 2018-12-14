import { observable, action, computed } from 'mobx'

class TestStore {
    @observable todolist = []
    @observable bridge = ''

    
    @computed get todoNum() {
        return this.todolist.length
    }

    @action handleAdd = (e) => {
        console.log(e)
        this.bridge = e
    }

    @action emptyB = () => {
        console.log('empty')
        this.bridge = ''
    }

    @action add = () => {
        console.log(this.bridge)
        this.todolist.push(this.bridge)
        this.emptyB()
    }
}

export default new TestStore()