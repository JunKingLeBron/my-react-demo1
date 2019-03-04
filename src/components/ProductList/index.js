import { connect } from 'react-redux';
import UI from './ui';
import { addCart, jianCart } from '../../store/actions/index';

export default connect(
  (state) => {
    return {
      products: state.products,
      carts: state.carts
    }
  },

  (dispatch) => {
    return {
      // 添加到购物车
      add: (productInfo) => {
        // let action = {
        //   type: 'ADD_CART',
        //   product: productInfo
        // }
        dispatch(addCart(productInfo));
      },

      jian: (productInfo) => {
        // let action = {
        //   type: 'JIAN_CART',
        //   product: productInfo
        // }
        dispatch(jianCart(productInfo));
      }
    }
  }
)(UI);
