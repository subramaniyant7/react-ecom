import * as actionType from '../actionType';
export const AddToCart = (data) => {
    return{
        type : actionType.ADD_TO_CART,
        payload : data
    }
}

export const updateCartProduct = (data) => {
    return{
        type : actionType.UPDATE_CART_PRODUCT,
        payload : data
    }
}

export const deleteCartProduct = (data) => {
    return{
        type : actionType.DELETE_CART_PRODUCT,
        payload : data
    }
}

export const ClearProducts = () => {
    return{
        type : actionType.CLEAR_CART_PRODUCT,
    }
}
