# react-redux

react-redux , 专门提供给 react 项目更好的去使用 redux的一个包。

# 使用步骤

1. 安装 react-redux

  yarn add react-redux

2. 将组件拆分成 ui组件 与 容器组件
  容器组件上跟仓库打交道，并将数据作为 props 传递到 ui组件。

  容器组件上面没有引入 仓库的文件？
  是因为咱们在 index.js 引入了 仓库的文件，并且使用 Provider 做为最外层的一个组件，将store 做为属性给设置了。

3. 页面使用的是 容器组件。
ch
