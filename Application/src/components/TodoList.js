import React from 'react';
import Todo from './Todo.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => (
  {
    todos: state.todos
  }
)

let TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
      />
    )}
  </ul>
)


TodoList = connect(mapStateToProps)(TodoList)
export default TodoList;
