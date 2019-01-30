import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo, fetchTodos } from "../action";
import { getVisibleTodos } from '../selectors'
import { toJS } from '../HOCs/toJS'

const mapStateToProps = state => ({
  todos: getVisibleTodos(state)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(TodoList));
