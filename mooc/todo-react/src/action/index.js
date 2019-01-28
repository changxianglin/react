import { 
    ADD_TODO, 
    TOGGLE_TODO, 
    SET_FILTER, 
    SET_TODO_TEXT,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
} from './actionTypes'
let nextTodoId = 0

const fetchTodoRequest = () => ({
    type: FETCH_TODOS_REQUEST
})

const fetchTodoSuccess = (data) => ({
    type: FETCH_TODOS_SUCCESS,
    data
})

const fetchTodoFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    error
})

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(fetchTodoRequest())
        return fetch('./mock/todos.json').then(
            response => {
                response.json().then(data => {
                    dispatch(fetchTodoSuccess(data))
                })
            },
            error => {
                dispatch(fetchTodoFailure(error))
                console.log('An error occurrend: ' + error)
            }
        )
    }
}

/**
 * 新增待办事项
 * @param {*} text 
 */
export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text: ''
})

/**
 * 改变待办事项状态
 * @param {*} id 
 */
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

/**
 * 设置过滤状态
 * @param {*} filter 
 */
export const setFilter = filter => ({
    type: SET_FILTER,
    filter
})

/**
 * 设置新增待办事项的文本
 * @param {*} text 
 */
export const setTodoText = text => ({
    type: SET_TODO_TEXT,
    text
})