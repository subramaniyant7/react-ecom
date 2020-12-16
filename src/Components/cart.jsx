import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';
import { bindActionCreators } from 'redux';

const Cart = (props) => {
    const { isAuthenticated, products, updateCartProduct, deleteCartProduct } = props;
    
    if(!isAuthenticated)  props.history.push("/login")
     
    const updateQty = (prdId) => { updateCartProduct(prdId); }

    const deleteProduct = (prdId) => { deleteCartProduct(prdId); }
    
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

const connector = connect(
    (state) => ({
      isAuthenticated: state.isAuthenticated,
      products : state.productDetails
    }),
    dispatch => bindActionCreators({ ...actionCreators }, dispatch),
  );
export default connector(Cart);