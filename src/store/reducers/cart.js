// 针对 购物车数据的 reducer
import { ADD_CART, JIAN_CART } from '../actions/types';

let initCart = [];

export default (prevState = initCart, action) => {
  // 执行深拷贝
  let state = JSON.parse(JSON.stringify(prevState));

  switch (action.type) {
    case ADD_CART:
      // 判断当前商品是否存在购物车中，
      var id = action.product.id; // 商品id
      var curProduct = state.find(item => {
        return item.id === id;
      })

      if (curProduct) {
        // 存在数量加1
        curProduct.num++;
        curProduct.total = curProduct.price * curProduct.num;
      } else {
        // 不存在
        state.push({
          ...action.product,
          num: 1,
          total: action.product.price
        });
      }
      break;

    case JIAN_CART:
      // 判断当前商品是否存在购物车中，
      var id = action.product.id; // 商品id
      var curProduct = state.find(item => {
        return item.id === id;
      })

      var index = state.indexOf(curProduct);

      if (curProduct) {
        // 存在

        if (curProduct.num > 1) {
          // 数量大于1的时候，做减法
          curProduct.num--;
          curProduct.total = curProduct.price * curProduct.num;
        } else {
          // 删除
          state.splice(index, 1);
        }

      }
      break;

    default:
      break;
  }

  // 最后不要忘了 return
  return state;
}
