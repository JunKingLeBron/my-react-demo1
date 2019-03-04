import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import CartApp from './views/CartApp';
import TodoApp from './views/TodoApp';


// 引入仓库的实例
// import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li>
            <NavLink to="/todo">TodoApp</NavLink>
            <NavLink to="/cart">购物车</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/todo" component={TodoApp}></Route>
          <Route path="/cart" component={CartApp}></Route>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
