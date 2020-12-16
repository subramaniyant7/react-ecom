import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {
  const { isAuthenticated, products } = props; 
    const link = isAuthenticated ? 'logout' : 'login';
    return (
        <ul className="nav_bar">
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/about">About</Link> </li>
          <li> <Link to="/todo">Todo</Link>  </li>
          <li> <Link to={link}>{link.charAt(0).toUpperCase() + link.slice(1)}</Link> </li>
          { isAuthenticated &&  <li><Link to="/cart">Cart({products.cart})</Link></li>}
        </ul>
    )
}

const connector = connect(
  (state) => ({
    isAuthenticated: state.isAuthenticated,
    products : state.productDetails
  }),
);
export default connector(Header);