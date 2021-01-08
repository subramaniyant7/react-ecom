import * as actionType from '../actionType';
import { productState } from '../../utils/storeData';

const Product = (state = productState, action) => {
   
    switch(action.type){
        case actionType.ADD_TO_CART:
            let cartItems ='';
            const isExistProduct = state.cartProducts.some(cartList => (cartList.id === action.payload.id));
            if(isExistProduct){
                cartItems = state.cartProducts.map( cart => {
                    if(cart.id === action.payload.id){
                        cart.qty += 1;
                    }
                    return cart;
                }); 
            }else{
                cartItems = [ ...state.cartProducts, action.payload ]
            }

            return { ...state, cartProducts : cartItems, cart : cartItems.length };

        case actionType.UPDATE_CART_PRODUCT:
            let updateItems = state.cartProducts.map( cart => {
                if(cart.id === action.payload.pid && action.payload.qty > 0){
                    cart.qty = action.payload.qty;
                }
                return cart;
            }); 
            return { ...state, cartProducts : updateItems };

        case actionType.DELETE_CART_PRODUCT:
            let items = state.cartProducts.filter(cart => cart.id !== action.payload)
            return { ...state, cartProducts : items, cart : items.length };

        case actionType.CLEAR_CART_PRODUCT:
            return productState;

        default:
            return productState;
    }
}

export default Product