import { observable, action, computed } from 'mobx'

class TodoStore {
    @observable birds = []

    @action addBird = (bird) => {
        this.birds.push(bird)
    }

    @computed get birdCount() {
        return this.birds.length
    }

}

const store = new TodoStore()
export default store