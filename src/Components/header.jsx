import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const loggedIn = useSelector(state => state.isAuthenticated);  
    const products = useSelector(state => state.productDetails); 
    const link = loggedIn ? 'logout' : 'login';
    return (
        <ul className="nav_bar">
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/about">About</Link> </li>
          <li> <Link to="/todo">Todo</Link>  </li>
          <li> <Link to={link}>{link.charAt(0).toUpperCase() + link.slice(1)}</Link> </li>
          { loggedIn &&  <li><Link to="/cart">Cart({products.cart})</Link></li>}
        </ul>
    )
}

export default Header;