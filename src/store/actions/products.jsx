export const AddToCart = (data) => {
    return{
        type : 'add_to_cart',
        payload : data
    }
}

export const LoadProducts = () => {
    return{
        type : 'load_products',
    }
}

export const ClearProducts = () => {
    return{
        type : 'clear_products',
    }
}

export const updateCartProduct = (data) => {
    return{
        type : 'update_cart',
        payload : data
    }
}

export const deleteCartProduct = (data) => {
    return{
        type : 'delete_cart',
        payload : data
    }
}
