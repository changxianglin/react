import { 
    ADD_TODO, 
    TOGGLE_TODO,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
 } from '../action/actionTypes'

const initialState = {
    isFetching: false,
    error: null,
    data: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TODOS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        case FETCH_TODOS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default: 
            return {
                ...state,
                data: todos(state.data, action)
            }          
    }

}

const todos = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
        return [
            ...state,
            {
                text: action.text,
                compoleted: false
            }
        ]
        case TOGGLE_TODO:
        return state.map(
            todo => 
            todo.id === action.id ? {...todo, compoleted: !todo.compoleted} : todo
        )
        default: 
        return state
    }
}

export default reducer