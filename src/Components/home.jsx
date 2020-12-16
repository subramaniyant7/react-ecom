import { AddToCart } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
const Home = (props) => {
    const dispatch = useDispatch();
    const productsList =  useSelector(state => state.productDetails.list)
    const loggedIn = useSelector(state => state.isAuthenticated);
    const addProduct = (prdId) => {
        if(!loggedIn) props.history.push('/login');
        const cartProduct = productsList.find(prod => prod.id === prdId );
        dispatch(AddToCart(cartProduct));
    }


   return (

        <div className="container">
            <div className="row">
                {
                    productsList.length > 0 ?
                        productsList.map((product,index) =>
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

export default Home;