// todo的 reducer
import { ADD_TODO, OK_TODO } from '../actions/types';

let initTodos = [
  {
    text: '吃饭',
    isOk: false
  },
  {
    text: '睡觉',
    isOk: true
  }
]
/**
 * 这个 todo的 reducer 文件，只处理 todo 相关的内容
 */
export default (prevState = initTodos, action) => {
  // 执行深拷贝
  let state = JSON.parse(JSON.stringify(prevState));

  switch (action.type) {
    case ADD_TODO:
      state.push({
        text: action.text,
        isOk: false
      })
      break;

    case OK_TODO:
      state[action.index].isOk = !state[action.index].isOk;
      break;

    default:
      break;
  }

  // 最后不要忘了 return
  return state;
}
