import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../assests/css/login.css';
import * as actionCreators from '../store/actions'
const Login = (props) => {
    const { isAuthenticated , Loggedin} = props;
    const [username,setName] = useState('');
    const [userpassword,setPassword] = useState('');
    const [error,setError] = useState(false);
    const formSubmit = (e) => {
        e.preventDefault();
        if(username === 'subu' && userpassword === '123'){ 
            Loggedin({'username' : username , 'userpassword' : userpassword});  
            props.history.push("/")
        }else{
            setError(true);
        }
    }

    if(isAuthenticated)  { 
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
      isAuthenticated: state.isAuthenticated,
    }),
    dispatch => bindActionCreators({ ...actionCreators }, dispatch),
  );
export default connector(Login);