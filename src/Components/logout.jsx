import { LogoutUser, ClearProducts } from '../store/actions';
import { useSelector, useDispatch } from 'react-redux';
const Logout = (props) => {
    const dispatch = useDispatch();
    dispatch(ClearProducts());
    dispatch(LogoutUser()); 
    const loggedIn = useSelector(state => state.isAuthenticated); 
    if(!loggedIn)  { 
        props.history.push('/')
    }
    return 'logout';
}

export default Logout;