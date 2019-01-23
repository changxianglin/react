import homeStore from '../pages/home/store'
import postStore from '../pages/post/store'

class rootStore {
    constructor() {
        this.homeStore = new homeStore(this)
        this.postStore = new postStore(this)
    }
}

const store = new rootStore()

export default store

// react-app-rewired
// react-app-rewire-mobx
// babel-plugin-styled-components
