import { observable } from 'mobx'

class learnStore {
  @observable learnList = [{msg: "first msg"}, {msg: "second msg"}, {msg: "third msg"}]
}

export default new learnStore()