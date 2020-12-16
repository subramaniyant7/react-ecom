import * as actionCreators from '../store/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const Logout = (props) => {
    const { isAuthenticated, ClearProducts, LogoutUser } = props;
    ClearProducts();
    LogoutUser(); 
    if(!isAuthenticated)  { 
        props.history.push('/')
    }
    return 'logout';
}

const connector = connect(
    (state) => ({
      isAuthenticated: state.isAuthenticated,
    }),
    dispatch => bindActionCreators({ ...actionCreators }, dispatch),
  );
export default connector(Logout);