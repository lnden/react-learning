/**
 * @author Lnden
 * @date 2018/11/30
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import { ADD_TO_CART,UPDATE_CART,DELETE_FROM_CART } from '../actions/cart-actions'

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
};

export default function(state=initialState,action){
    switch(action.type){
        case ADD_TO_CART:{
            return {
                ...state,
                cart: [...state.cart,action.payload]
            }
        }
        case UPDATE_CART:{
            return {
                ...state,
                // 判断当前产品===传递过来的产品  返回新的商品和数量、否则返回原来对象
                cart: state.cart.map(item => {
                    console.log(item.product,1111)
                    if(item.product === action.payload.product){
                        return action.payload
                    }else{
                        return item
                    }
                })
            }
        }
        case DELETE_FROM_CART:{
            return {
                ...state,
                // 判断产品名称是否相同，如果相同则删除对应产品
                cart: state.cart.filter(item => item.product !== action.payload.product)
            }
        }
        default:
            return state;
    }
}