const defaultState = {
    inputValue: 'Hello world',
    list: [],
}

export default (state = defaultState, action) => {
    if(action.type === 'change_input_value') {
        return {
            ...state,
            inputValue: action.value,
        }
    }
    return state
}