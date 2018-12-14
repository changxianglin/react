import { observable } from 'mobx'

class LearnStore {
  @observable learnList = [{msg: "first msg"}, {msg: "second msg"}, {msg: "third msg"}]
}

export default new LearnStore()