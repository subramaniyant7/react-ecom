const Authenticate = (state = false, action) => {
    switch(action.type){
        case 'isAuthenticated':
            if(localStorage.getItem('name') === 'subu' && localStorage.getItem('key') === '123')  { 
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
            return false;
        default:
            return state;
    }
}

export default Authenticate

