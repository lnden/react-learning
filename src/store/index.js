/**
 * @author Lnden
 * @date 2018/11/30
 * @desc redux示例
 * @param https://segmentfault.com/a/1190000011474522
 *
 */

import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const store = createStore(rootReducer,composeWithDevTools());

export default store;