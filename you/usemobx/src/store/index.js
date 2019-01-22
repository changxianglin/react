import homeStore from '../pages/home/store'

class rootStore {
    constructor() {
        this.homeStore = new homeStore(this)
    }
}

const store = new rootStore()

export default store

// react-app-rewired
// react-app-rewire-mobx
// babel-plugin-styled-components
