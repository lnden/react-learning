/**
 * @author Lnden
 * @date 2018/11/30
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import { combineReducers } from 'redux'
import productsReducer from './products-reducer'
import cartReducer from './cart-reducer'

const allReducers = {
    prosucts: productsReducer,
    shoppingCart: cartReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;