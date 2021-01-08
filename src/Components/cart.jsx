import { memo } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';
import { bindActionCreators } from 'redux';

const Cart = (props) => {
    const { userInfo, products, updateCartProduct, deleteCartProduct } = props;
    
    const { authenticated } = userInfo;

    if(!authenticated)  props.history.push("/login")
     
    const updateQty = (prdId,qty) => { 
        updateCartProduct({ pid : prdId, qty : qty}); 
    }

    const deleteProduct = (prdId) => { deleteCartProduct(prdId); }
    
    return (
        <div className="cart_list">
            <table id="customers">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Product Name</th>
                        <th>Qty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.cartProducts.length > 0 ?
                        products.cartProducts.map( (prd,index) => 
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{prd.title}</td>
                                <td>{prd.qty}</td>
                                <td>
                                    <span className="hover" onClick={() => updateQty(prd.id, prd.qty + 1 )}><i className="fa fa-plus"></i> </span>
                                    <span className="hover" onClick={() => updateQty(prd.id, prd.qty - 1)}><i className="fa fa-minus"></i> </span>
                                    <span className="hover" onClick={() => deleteProduct(prd.id)}><i className="fa fa-trash"></i> </span>
                                </td>
                            </tr> 
                        ) : 

                        <tr>
                            <td colSpan={4}>No products found</td>   
                        </tr> 
                }  
                </tbody>  
            </table>
        </div>
    )
}

const connector = connect(
    (state) => ({
      userInfo: state.userInfo,
      products : state.productDetails
    }),
    dispatch => bindActionCreators({ ...actionCreators }, dispatch),
  );
export default connector(memo(Cart));