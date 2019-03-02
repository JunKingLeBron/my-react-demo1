import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import TodoAdd from './components/TodoAdd/index.js';
import TodoList from './components/TodoList/index.js';

// 引入仓库的实例
// import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <TodoAdd />
      <TodoList />
    </div>
  </Provider>,
  document.getElementById('root')
);
