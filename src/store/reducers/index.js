// 主的 reducer
// combineReducers 帮我们做合并
import { combineReducers } from 'redux';

import todo from '@/store/reducers/todo';
import cart from '@/store/reducers/cart';
import product from '@/store/reducers/product';

export default combineReducers({
  todos: todo,
  carts: cart,
  products: product
})

// export default (state = {}, action) => {

//   /**
//    * 这里return出去的就是 整个 仓库的 state 数据
//    */
//   // return {
//   //   todos: todo(state.todos, action),
//   //   // todos: [],
//   //   carts: cart(state.carts, action),
//   //   products: product(state.products, action),
//   // }

// }


// // 1. 初始化
//   state.todos undefined   [{吃饭}, {睡觉}]

// // 2. 点击页面中的 add 按钮
//   state.todos [{吃饭}, {睡觉}]   [{吃饭}, {睡觉}, {打豆豆}]





// let hhh = (prevState = defaultState, action) => {
//   console.log('之前的状态:', prevState);
//   console.log('执行的动作:', action);
//   // 执行深拷贝
//   let state = JSON.parse(JSON.stringify(prevState));

//   switch (action.type) {
//     case ADD_TODO:
//       // 下面这样，违背了纯函数的使用
//       // state.todos.push({
//       //   text: action.text
//       // })
//       state.todos.push({
//         text: action.text,
//         isOk: false
//       })
//       break;

//     case 'OK_TODO':
//       state.todos[action.index].isOk = !state.todos[action.index].isOk;
//       break;

//     case ADD_CART:
//       // 判断当前商品是否存在购物车中，
//       var id = action.product.id; // 商品id
//       var curProduct = state.carts.find(item => {
//         return item.id === id;
//       })

//       if (curProduct) {
//         // 存在数量加1
//         curProduct.num++;
//         curProduct.total = curProduct.price * curProduct.num;
//       } else {
//         // 不存在
//         state.carts.push({
//           ...action.product,
//           num: 1,
//           total: action.product.price
//         });
//       }
//       break;

//     case JIAN_CART:
//       // 判断当前商品是否存在购物车中，
//       var id = action.product.id; // 商品id
//       var curProduct = state.carts.find(item => {
//         return item.id === id;
//       })

//       var index = state.carts.indexOf(curProduct);

//       if (curProduct) {
//         // 存在

//         if (curProduct.num > 1) {
//           // 数量大于1的时候，做减法
//           curProduct.num--;
//           curProduct.total = curProduct.price * curProduct.num;
//         } else {
//           // 删除
//           state.carts.splice(index, 1);
//         }

//       }

//     default:
//       break;
//   }
//   console.log('操作完成之后：', state);
//   // 必须要return
//   return state;
// }

// export default hhh;
