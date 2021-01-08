import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { user } from '../utils/config';
import '../assests/css/login.css';
import * as actionCreators from '../store/actions'
const Login = (props) => {
    const { userInfo , Loggedin} = props;
    const { authenticated } = userInfo;
    const [username,setName] = useState('');
    const [userpassword,setPassword] = useState('');
    const [error,setError] = useState(false);
    const formSubmit = (e) => {
        e.preventDefault();
        if(username === user.name && userpassword === user.password){ 
            Loggedin({'username' : username , 'userpassword' : userpassword});  
            props.history.push("/")
        }else{
            setError(true);
        }
    }

    if(authenticated)  { 
        props.history.push('/')
    }

    return (
        <div className="login_form">
            { error && <div className="error_msg">Invalid username or password</div> }
            <form onSubmit={(e) => formSubmit(e)}>
                <label>Name</label>
                <input className="form_input" type="text" onChange={(e) => setName(e.target.value)} value={username} />
                <label>Password</label>
                <input className="form_input" type="password" onChange={(e) => setPassword(e.target.value)}  value={userpassword} />               
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

const connector = connect(
    (state) => ({
      userInfo: state.userInfo,
    }),
    dispatch => bindActionCreators({ ...actionCreators }, dispatch),
  );
export default connector(Login);