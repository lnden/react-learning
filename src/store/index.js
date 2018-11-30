/**
 * @author Lnden
 * @date 2018/11/30
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const store = createStore(rootReducer,composeWithDevTools());

export default store;