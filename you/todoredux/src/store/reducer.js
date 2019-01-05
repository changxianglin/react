const defaultState = {
    inputValue: '123',
    list: [1, 2]
}

export default (state = defaultState, action) => {
    if(action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
    }
    console.log(state, action)
    return state
}