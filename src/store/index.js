// 生成仓库的文件。仓库的主文件

import { createStore } from 'redux';

/**
 * createStore
 * 创建仓库的函数
 * @param {Function} reducer 纯函数
 * @return {Object} store 仓库的实例
 */

// 初始化的状态
let defaultState = {
  todos: [
    {
      text: '吃饭',
      isOk: false
    },
    {
      text: '睡觉',
      isOk: true
    }
  ], // TodoList 需要去遍历出来的东西
}

/**
 * 纯函数reducer
 * @param {Any} prevState 上一次的状态
 * @param {Object} action 动作
 * @return {Any} newState 返回一个新的仓库状态
 */
let store = createStore((prevState = defaultState, action) => {
  console.log('之前的状态:', prevState);
  console.log('执行的动作:', action);
  // 执行深拷贝
  let state = JSON.parse(JSON.stringify(prevState));

  switch (action.type) {
    case 'ADD_TODO':
      // 下面这样，违背了纯函数的使用
      // state.todos.push({
      //   text: action.text
      // })
      state.todos.push({
        text: action.text,
        isOk: false
      })
      break;

    case 'OK_TODO':
      state.todos[action.index].isOk = !state.todos[action.index].isOk;
      break;

    default:
      break;
  }
  console.log('操作完成之后：', state);
  // 必须要return
  return state;
})

export default store;
