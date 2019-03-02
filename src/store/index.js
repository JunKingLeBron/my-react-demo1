// 生成仓库的文件。仓库的主文件

import { createStore } from 'redux';
import hhh from './reducers/index'

/**
 * createStore
 * 创建仓库的函数
 * @param {Function} reducer 纯函数
 * @return {Object} store 仓库的实例
 */

/**
 * 纯函数reducer
 * @param {Any} prevState 上一次的状态
 * @param {Object} action 动作
 * @return {Any} newState 返回一个新的仓库状态
 */
let store = createStore(hhh)

export default store;
