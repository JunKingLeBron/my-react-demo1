import React from 'react';

// 使用 仓库中的 todos 去做遍历
// 1. 引入store
import store from '../store/index';
// 2. 调用store.getState()来获取仓库中的数据
// console.log(store.getState().todos);

class TodoList extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      todos: store.getState().todos
    }

    // 这里要做监听, 监听的数据变化
    store.subscribe(() => {
      console.log('我变了，你做事吧');
      this.setState({
        todos: store.getState().todos
      })
    })
  }

  handleOk (index) {
    // 改变操作中todos的某一项的 isOk 属性为true
    let action = {
      type: 'OK_TODO',
      index: index
    }
    store.dispatch(action);
  }

  render () {
    return (
      <ul>
        {
          this.state.todos.map((item, index) => {
            return (
              <li
                style={{ textDecoration: item.isOk ? 'line-through' : '' }}
                key={index}
                onClick={this.handleOk.bind(this, index)}
                >
                { item.text }
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default TodoList;
