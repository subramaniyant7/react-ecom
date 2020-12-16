import * as actionCreators from '../store/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const Home = (props) => {

    const { AddToCart, isAuthenticated, products } = props;
    const addProduct = (prdId) => {
        if(!isAuthenticated) props.history.push('/login');
        const cartProduct = products.list.find(prod => prod.id === prdId );
        AddToCart(cartProduct)
    }

   return (
        <div className="container">
            <div className="row">
                {
                    products.list.length > 0 ?
                        products.list.map((product,index) =>
                            <div className="col-md-4 col-sm-6 grid" key={index}>
                                <div className="product-grid9">
                                    <div className="product-image9">
                                        <a href="#">
                                            <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-1.jpg" />
                                            <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-2.jpg" />
                                        </a>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="title">{product.title}</h3>
                                        <div className="price"> ${product.price}</div>
                                        <button className="btn-primary" onClick={()=> addProduct(product.id)} >Add to Cart</button>
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
      isAuthenticated: state.isAuthenticated,
    }),
    dispatch => bindActionCreators({ ...actionCreators }, dispatch),
  );
export default connector(Home);