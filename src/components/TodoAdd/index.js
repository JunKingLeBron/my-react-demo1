// 这个是 TodoAdd 的容器组件
// 容器组件的写法，不是我们主动去定义组件，而是通过 react-redux connect() 去连接UI组件，返回容器组件。
import { connect } from 'react-redux';
import UI from './ui';

/**
 * state 就是仓库中的 state
 */
let mapStateToProps = (state) => {
  console.log(state);
  // return 出去的就是 UI组件 props
  return {
    a: '1',
    b: '2'
  }
}

/**
 * dispatch 就是 仓库的 dispatch 方法
 * store.dispatch
 */
let mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (value) => {
      // console.log('容器组件中的 addTodo 被调用')

      // 派发动作
      let action = {
        type: 'ADD_TODO',
        text: value
      }
      dispatch(action)
    }
  }
}

/**
 * 连接UI组件 connect
 * @param {Object} mapStateToProps    将从仓库中的数据取出，并转换成UI组件的props传递下去
 * @param {Object} mapDispatchToProps 定义好的Action,转换成UI组件的props传递下去
 * @return {Function} 返回的是一个函数
 */
export default connect(mapStateToProps, mapDispatchToProps)(UI);
