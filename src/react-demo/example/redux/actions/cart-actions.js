/**
 * @author Lnden
 * @date 2018/11/30
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export function addToCart(product,quantity,unitCost){
    return {
        type: ADD_TO_CART,
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}

export function updateCart(product,quantity,unitCost){
    return {
        type: UPDATE_CART,
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}

export function deleteFromCart(product){
    return {
        type: DELETE_FROM_CART,
        payload: {
            product
        }
    }
}