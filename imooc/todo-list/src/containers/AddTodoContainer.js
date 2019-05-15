import { connect } from 'react-redux'
import {
  setTodoText,
  addTodo,
} from '../action'
import AddTodo from '../components/AddTodo'

const mapStateToProps = (state) => ({
  text: state.text,
})

const maptDispatchToProps = (dispatch) => ({
  setTodoText: text => dispatch(setTodoText(text)),
  addTodo: text => dispatch(addTodo(text)),
})

export default connect(mapStateToProps, maptDispatchToProps)(AddTodo)