const logger = createStore => (...args) => {
    const store = createStore(...args)
    const dispatch = (action) => {
        console.group(action.type)
        console.log('dispatching:', action)
        const result = store.dispatch(action)
        console.log('next state:', store.getState())
        console.groupEnd()
        return result
    }
    return {...store, dispatch}
}

export default logger