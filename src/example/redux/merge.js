/**
 * @author Lnden
 * @date 2018/11/30
 * @desc 该文件主要使用combineReducers合并reucer
 */


import { createStore, combineReducers } from "redux";


//  创建第一个reducer
const productsReducer = function(state=[], action) {
    return state;
};

//  创建第二个reducer
const cartReducer = function(state=initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }

        default:
            return state;
    }
}

//  初始化state
const initialState = {
    cart: [
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        }
    ]
}


//  定义常量 [应该引入外部文件]
const ADD_TO_CART = 'ADD_TO_CART';



//  创建Action Creator
function addToCart(product, quantity, unitCost) {
    return {
        type: ADD_TO_CART,
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}

//  合并对象
const allReducers = {
    products: productsReducer,
    shoppingCart: cartReducer
}
//  使用combineReducers合并对象
const rootReducer = combineReducers(allReducers);




let store = createStore(rootReducer);
console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() =>{
    console.log(store.getState())
});

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));

unsubscribe();

export default store;