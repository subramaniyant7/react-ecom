import Products from '../../utils/products.json';
const initialState = { cart : 0 , cartProducts : [] , list : Products}
const Product = (state = initialState, action) => {
    switch(action.type){
        case 'add_to_cart':
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
        case 'update_cart':
            let updateItems = state.cartProducts.map( cart => {
                if(cart.id === action.payload){
                    cart.qty += 1;
                }
                return cart;
            }); 
            return { ...state, cartProducts : updateItems };

        case 'delete_cart':
            let items = state.cartProducts.filter(cart => cart.id !== action.payload)
            return { ...state, cartProducts : items, cart : items.length };
        case 'clear_products':
            return initialState;
        default:
            return initialState;
    }
}

export default Product