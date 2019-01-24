import { observable } from 'mobx'

class styledStore {
    @observable title = '测试css'
    @observable article = '测试 css module'
}

export default styledStore