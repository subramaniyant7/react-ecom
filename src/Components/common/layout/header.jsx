import { memo } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {
  const { userInfo, products, location } = props; 
  const { authenticated, user } = userInfo;
    
    return (
        <div className="topnav" id="myTopnav">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/todo'>Todo</Link>
          <span className="right">
            {
              authenticated ?
               <> 
                <div className="dropdown">
                  <button className="dropbtn"><span style={{padding:'0px 10px'}}>Welcome { user.name }</span>
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <Link to='/myaccount'>My Account</Link>
                    <Link to='/logout'>Logout</Link>
                  </div>
                </div>
                <Link to='/cart'><i className="fa fa-shopping-cart" style={{padding:'0px 8px'}} />Cart({products.cartProducts.length})</Link>
              </>
              : <Link to='/login'>Login</Link>
            }
          </span>
        </div>
    )
}

const connector = connect(
  (state) => ({
    userInfo: state.userInfo,
    products : state.productDetails
  }),
);
export default connector(memo(Header));