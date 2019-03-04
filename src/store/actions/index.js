// 创建 动态的js文件
import { ADD_TODO, ADD_CART, JIAN_CART } from './types';

// 暴露一些个函数，这些函数都是 create action

/**
 * 添加购物车
 * @param {Object} productInfo 商品信息
 * @return {Object} 动作
 */
export const addCart = (productInfo) => {
  return {
    type: ADD_CART,
    product: productInfo
  }
}

/**
 * 删除某件商品
 * @param {Object} productInfo 商品信息
 * @return {Object} 动作
 */
export const jianCart = (productInfo) => {

  return {
    type: JIAN_CART,
    product: productInfo
  }
}


export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text: text
  }
}
