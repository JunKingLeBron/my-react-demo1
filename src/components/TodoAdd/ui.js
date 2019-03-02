// 这个就是 TodoAdd 的 ui组件
// 1. ui组件没有状态，所以一般来说我们ui组件可以做成 函数写法。但是不是绝对的。
import React from 'react';

class UI extends React.Component {

  addTodo () {
    // 派发动作。。。。。UI组件不能跟仓库打交道。触发容器组件传递过来的props
    this.props.addTodo(this.myInput.value);
  }

  render () {
    return (
      <div>
        { this.props.a }

        { this.props.b }

        <input type="text" ref={(el) => this.myInput = el} />
        <button onClick={this.addTodo.bind(this)}>ADD</button>
      </div>
    )
  }
}

export default UI;
