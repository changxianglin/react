import { ADD_ITEM, CHANGE_INPUT_VALUE} from './constants'

const defaultState = {
    inputValue: '',
    list: [],
}

export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE) {
        return {
            ...state,
            inputValue: action.value,
        }
    }
    if(action.type === ADD_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}