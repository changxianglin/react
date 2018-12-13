import TodolistStore from './todolist.store'
import learnStore from '../pages/store'

// export default { TodolistStore, learnStore }


class store {
    TodolistStore = new TodolistStore()
    learnStore = new learnStore()   
}

export default store


