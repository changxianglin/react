import { createStore } from 'redux'

function counter(state = 0, action) {
  switch(action.type){
    case '加机关枪':
      return state + 1
    case '减机关枪':
      return state - 1
    default:
      return 10
  }
}

const store = createStore(counter)

const init = store.getState()

console.log(init)

function listener() {
  const current = store.getState()
  console.log(`现在有机枪${current}把`)
}

store.subscribe(listener)

store.dispatch({type: '加机关枪'})
store.dispatch({type: '加机关枪'})
store.dispatch({type: '减机关枪'})