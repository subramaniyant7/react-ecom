import * as actionCreators from '../store/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
const Logout = (props) => {
    const { LogoutUser, history } = props;
    
    useEffect(() => {
      LogoutUser();
      history.push('/')
    }, [LogoutUser,history]);

    return null;
}

const connector = connect(
    (state) => ({
      userInfo: state.userInfo,
    }),
    dispatch => bindActionCreators({ ...actionCreators }, dispatch),
  );
export default connector(Logout);