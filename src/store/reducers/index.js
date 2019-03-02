// 主的 reducer
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

  // 商品列表
  products: [
    {
      id: 1000,
      name: '猫粮',
      price: 10,
    },
    {
      id: 1001,
      name: '狗粮',
      price: 20,
    }
  ],

  // 购物车数据
  carts: [

  ]
}

let hhh = (prevState = defaultState, action) => {
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

    case 'ADD_CART':
      // 判断当前商品是否存在购物车中，
      var id = action.product.id; // 商品id
      var curProduct = state.carts.find(item => {
        return item.id === id;
      })

      if (curProduct) {
        // 存在数量加1
        curProduct.num++;
        curProduct.total = curProduct.price * curProduct.num;
      } else {
        // 不存在
        state.carts.push({
          ...action.product,
          num: 1,
          total: action.product.price
        });
      }
      break;

    case 'JIAN_CART':
      // 判断当前商品是否存在购物车中，
      var id = action.product.id; // 商品id
      var curProduct = state.carts.find(item => {
        return item.id === id;
      })

      var index = state.carts.indexOf(curProduct);

      if (curProduct) {
        // 存在

        if (curProduct.num > 1) {
          // 数量大于1的时候，做减法
          curProduct.num--;
          curProduct.total = curProduct.price * curProduct.num;
        } else {
          // 删除
          state.carts.splice(index, 1);
        }

      }

    default:
      break;
  }
  console.log('操作完成之后：', state);
  // 必须要return
  return state;
}

export default hhh;
