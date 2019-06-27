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

import { addToCart, updateCart, deleteFromCart } from './actions/cart-actions'

const store = createStore(rootReducer,composeWithDevTools());

console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() =>{
    console.log(store.getState(),11)
});
 
store.dispatch(addToCart('Coffee 500gm', 6, 100));
store.dispatch(updateCart('bread 700g', 6, 200));
store.dispatch(deleteFromCart('Coffee 500gm', 6, 300));

unsubscribe();

//  拆分redux

//     import store from './store'
//     import { addToCart,updateCart,deleteFromCart } from "./store/actions/cart-actions";
//     // console.log('initial state：',store.getState());

//     let unsubscribe = store.subscribe(()=>{
//     // console.log(store.getState())
//     });
//     store.dispatch(addToCart('Coffee 500gm',1,250));
//     store.dispatch(addToCart('Flour 1kg',2,110));
//     store.dispatch(addToCart('Juice 2L',1,250));

//     store.dispatch(updateCart('Flour 1kg',5,110));
//     store.dispatch(deleteFromCart('Coffee 500gm'));
//     unsubscribe();

export default store;