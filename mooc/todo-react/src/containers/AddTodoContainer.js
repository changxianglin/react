import { connect } from "react-redux";
import AddTodo from "../components/AddTodo";
import { setTodoText, addTodo } from "../action";

const mapStateToProps = state => ({
    text: state.text
})

const mapDispatchToProps = dispatch => ({
    setTodoText: text => dispatch(setTodoText(text)),
    addTodo: text => dispatch(addTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)