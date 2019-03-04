import React from 'react';
import TodoAdd from '../components/TodoAdd/index.js';
import TodoList from '../components/TodoList/index.js';
import myImg from '@/images/4.jpg';

const TodoApp = () => {
  return (
    <div>
      <TodoAdd />
      <TodoList />
      <img src={myImg} />
    </div>
  )
}

export default TodoApp;
