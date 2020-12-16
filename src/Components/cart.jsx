import { useSelector,useDispatch } from 'react-redux';
import { updateCartProduct,deleteCartProduct } from '../store/actions';

const Cart = (props) => {

    const loggedIn = useSelector(state => state.isAuthenticated);  
    const products = useSelector(state => state.productDetails);  
    const dispatch = useDispatch();
    if(!loggedIn)  props.history.push("/login")
     

    const updateQty = (prdId) => {
        dispatch(updateCartProduct(prdId));
    }

    const deleteProduct = (prdId) => {
        dispatch(deleteCartProduct(prdId));
    }
    return (
        <div className="cart_list">
            <table id="customers">
                <tr>
                    <th>S.No</th>
                    <th>Product Name</th>
                    <th>Qty</th>
                    <th>Action</th>
                </tr>
                {
                    products.cartProducts.length > 0 ?
                        products.cartProducts.map( (prd,index) => 
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{prd.title}</td>
                                <td>{prd.qty}</td>
                                <td>
                                    <span onClick={() => updateQty(prd.id)}><i class="fa fa-plus"></i> </span>
                                    <span onClick={() => deleteProduct(prd.id)}><i class="fa fa-trash"></i> </span>
                                </td>
                            </tr> 
                        ) : 

                        <tr>
                            <td colSpan={4}>No products found</td>   
                        </tr> 
                }    
            </table>
        </div>
    )
}

export default Cart;