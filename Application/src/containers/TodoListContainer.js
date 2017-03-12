import { connect } from 'react-redux';
import add from './../actions/index.js'
import TodoList from '../components/TodoList.js';

const mapStateToProps = (state) => (
  {
    todos: state.todos
  }
)
const mapDispatchToProps = {
  addTodo: add
}

const TodoListContainer = connect(
  mapStateToProps
)(TodoList);

export default TodoListContainer;
