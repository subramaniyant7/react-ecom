import { authState } from '../../utils/storeData';
import { user } from '../../utils/config';
const Authenticate = (state = authState, action) => {
    switch(action.type){
        case 'isAuthenticated':
            if(localStorage.getItem('name') === user.name && localStorage.getItem('key') === user.password)  { 
               return !state;
            }
            return state;
        case 'Login' :
            localStorage.setItem('name', action.payload.username);
            localStorage.setItem('key', action.payload.userpassword); 
            return true;
        case 'Logout' :
            localStorage.removeItem("name"); 
            localStorage.removeItem("key");
            return authState;
        default:
            return state;
    }
}

export default Authenticate

