import { memo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { notify } from '../utils/helpers';  
import * as actionCreators from '../store/actions';
import Rating from './common/rating';

const Home = (props) => {
    const { AddToCart, userInfo, products, history } = props;
    const { authenticated } = userInfo;
    const addProduct = (prdId) => {
        if(authenticated) {
            const cartProduct = products.list.find(prod => prod.id === prdId );
            notify('success', 'Product added successfully', 'add to cart product');
            AddToCart(cartProduct)
          }else{
            history.push('/login');
          }
    }

    const prodDetails = (prdId) => {
        history.push(`/detail/${prdId}`);
    }

   return (
        <div className="container">
            <div className="row">
                {
                    products.list.length > 0 ?
                        products.list.map((product,index) =>
                            <div className="col-md-4 col-sm-6 grid" key={index}>
                                <div className="product-grid9">
                                    <div className="product-image9 hover" onClick={()=>prodDetails(product.id)}>
                                        <img className="pic-1" src={`img/${product.filename}.jpeg`} alt={product.filename} />
                                    </div>
                                    <div className="product-content">
                                        <h3 className="title">{product.title}</h3>
                                        <div className="price"> ${product.price}</div>
                                        <Rating rating={product.rating} />
                                        <button className="btn-primary hover" onClick={()=> addProduct(product.id)} >Add to Cart</button>
                                    </div>
                                </div>
                            </div> 
                        )
                        : <div>No Products Available</div>
                }
            </div>
        </div>
    );
}

const connector = connect(
    (state) => ({
      products: state.productDetails,
      userInfo: state.userInfo,
    }),
    dispatch => bindActionCreators({ ...actionCreators }, dispatch),
  );
export default connector(memo(Home));