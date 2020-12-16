import Authenticate from './authenticate';
import Products from './products';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isAuthenticated : Authenticate,
    productDetails : Products
})


export default allReducers;
