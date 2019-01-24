import homeStore from '../pages/home/store'
import postStore from '../pages/post/store'
import styledStore from '../pages/styledout/store'
import tablesStore from '../pages/table/store'

class rootStore {
    constructor() {
        this.homeStore = new homeStore(this)
        this.postStore = new postStore(this)
        this.styledStore = new styledStore(this)
        this.tablesStore = new tablesStore(this)
    }
}

const store = new rootStore()

export default store

// react-app-rewired
// react-app-rewire-mobx
// babel-plugin-styled-components
