import React from 'react'
import { connect } from 'react-redux'
import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'

const TodoList = (props) => {
    const { inputValue, changeInputValue, handleClick, handleDelete, list } = props
    return (
        <div>
            <div>
                <input 
                value = { inputValue }
                onChange = { changeInputValue }
                />
                <button onClick = { handleClick }>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li onClick = {() => handleDelete(index)} key = {index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list,
    }
}

const mapDisPatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: CHANGE_INPUT_VALUE,
                value: e.target.value,
            }
            dispatch(action)
        },

        handleClick() {
            const action = {
                type: ADD_ITEM,
            }
            dispatch(action)
        },

        handleDelete(index) {
            const action = {
                type: DELETE_ITEM,
                index
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(TodoList)