import React from 'react';
import  { connect } from 'react-redux'

const TodoList = (props) => {
    const {inputValue, list, handleInputChange, handleClick, handleDelete } = props
        return (
            <div>
                <div>
                    <input 
                    value = {inputValue}
                    onChange = {handleInputChange}
                     />
                    <button 
                    onClick = {handleClick}>
                    提交</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li 
                                onClick = {() => {handleDelete(index)}}
                                key = {index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        },
        handleDelete(index) {
            const action = {
                type: 'delete_item',
                value: index
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(TodoList)