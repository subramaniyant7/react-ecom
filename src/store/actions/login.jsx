export const isAuthenticate = () => {
    return {
        type : 'isAuthenticated'
    }
}

export const Loggedin = (data) => {
    return{
        type : 'Login',
        payload : data
    }
}

export const LogoutUser = () => {
    return{
        type : 'Logout'
    }
}