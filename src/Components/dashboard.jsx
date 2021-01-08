import { useSelector } from 'react-redux';
const Dashboard = (props) => {
    const userInfo = useSelector(state => state.userInfo);  
    const { authenticated } = userInfo;  
    if(!authenticated)  props.history.push("/login")
    return ('Dashboard');
}

export default Dashboard;