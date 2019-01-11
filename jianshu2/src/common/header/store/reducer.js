const defaultState = {
    focused: false
}

export default (state = defaultState, action) => {
    if(action.type === 'search_fous') {
        return {
            focused: true
        }
    }
    if(action.type === 'search_blur') {
        return {
            focused: false
        }
    }
    return state
}