import Products from './products';
import UserInfo from './userInfo';
import { combineReducers } from 'redux';
import * as actionType from '../actionType';

const appReducer = combineReducers({
    productDetails : Products,
    userInfo : UserInfo
})

const rootReducer = (state, action) => {
    if (action.type === actionType.LOGOUT) {
      localStorage.clear();
      state = undefined;
    }
  
    return appReducer(state, action);
  };


export default rootReducer;
