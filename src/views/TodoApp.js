import React from 'react';
import TodoAdd from '../components/TodoAdd/index.js';
import TodoList from '../components/TodoList/index.js';

const TodoApp = () => {
  return (
    <div>
      <TodoAdd />
      <TodoList />
    </div>
  )
}

export default TodoApp;
