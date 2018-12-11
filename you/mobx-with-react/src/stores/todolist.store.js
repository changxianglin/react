import { observable } from 'mobx'

class TodolistStore {
  @observable todoList = [{msg: "first msg"}, {msg: "second msg"}, {msg: "third msg"}]
}

export default new TodolistStore()
