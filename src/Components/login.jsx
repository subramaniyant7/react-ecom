// import '../login.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../assests/css/login.css';
import { Loggedin } from '../store/actions'
const Login = (props) => {
    const [username,setName] = useState('');
    const [userpassword,setPassword] = useState('');
    const [error,setError] = useState(false);
    const loggedIn = useSelector(state => state.isAuthenticated); 
    const dispatch = useDispatch();
    const formSubmit = (e) => {
        e.preventDefault();
        if(username === 'subu' && userpassword === '123'){ 
            dispatch(Loggedin({'username' : username , 'userpassword' : userpassword}));  
            props.history.push("/")
        }else{
            setError(true);
        }
    }

    if(loggedIn)  { 
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

export default Login;