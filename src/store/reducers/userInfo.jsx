import { userInfo } from '../../utils/storeData';
import * as actionType from '../actionType';
import { user } from '../../utils/config';
const UserInfo = (state = userInfo, action) => {
    switch(action.type){
        case actionType.LOGIN :
            localStorage.setItem('name', action.payload.username);
            localStorage.setItem('key', action.payload.userpassword); 
            return { ...state, user : { name : action.payload.username }, authenticated : true };
        default:
            if(localStorage.getItem('name') === user.name && localStorage.getItem('key') === user.password)  { 
                return { ...state, user : { name : user.name }, authenticated : true };
             }
            return state;
    }
}

export default UserInfo

