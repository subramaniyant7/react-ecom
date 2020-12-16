import { useSelector } from 'react-redux';
const Dashboard = (props) => {
    const loggedIn = useSelector(state => state.isAuthenticated);    
    if(!loggedIn)  props.history.push("/login")
    return ('Dashboard');
}

export default Dashboard;