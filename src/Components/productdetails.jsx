import { memo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../store/actions';
import { notify } from '../utils/helpers'; 
import Rating from './common/rating';

const ProductDetail = (props) => {
    const { AddToCart, userInfo, products, history, match } = props;
   
    const { authenticated } = userInfo;

    const prdId = match.params.id;

    const list = products.list.filter((prd) => parseInt(prdId) === prd.id );

    const addProduct = (prdId) => {
      if(authenticated) {
        const cartProduct = products.list.find(prod => prod.id === prdId );
        notify('success', 'Product added successfully', 'add to cart product');
        AddToCart(cartProduct)
      }else{
        history.push('/login');
      }
      
    }

    return(
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            
              {
                list.map( (product,index) =>(
                  <div className="wrapper row" key={index}>
                      <div className="preview col-md-6">
                        <div className="preview-pic tab-content">
                          <div className="tab-pane active" id="pic-1">
                            <img className="pic-1" src={`../img/${product.filename}.jpeg`} alt={product.filename} />
                          </div>
                        </div>
                      </div>

                      <div className="details col-md-6">
                        <h3 className="product-title">{product.title}</h3>
                        <Rating rating={product.rating} />
                        
                        <p className="product-description">{product.description}</p>
                        <h4 className="price">current price: <span>${product.price}</span></h4>

                        <div className="action">
                          <button className="add-to-cart btn btn-default" onClick={()=> addProduct(product.id)} type="button">add to cart</button>
                        </div>
                      </div>
                    </div>
                ))
              }
              
				   
			    </div>
		    </div>
	    </div>
    )
}

const connector = connect(
    (state) => ({
      products: state.productDetails,
      userInfo: state.userInfo,
    }),
    dispatch => bindActionCreators({ ...actionCreators }, dispatch),
  );
export default connector(memo(ProductDetail));