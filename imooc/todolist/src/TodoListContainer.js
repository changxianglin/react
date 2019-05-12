import { connect } from 'react-redux'
import TodoList from './TodoList'
import {
  changInputValue,
  addItem,
  deleteItem
} from './store/actionCreators'

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const value = e.target.value
      const action = changInputValue(value)
      dispatch(action)
    },
    handleClick() {
      const action = addItem()
      dispatch(action)
    },
    handleDeleteItem(index) {
      const action = deleteItem(index)
      dispatch(action)
    }  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
