import * as actionType from '../actionType';
export const isAuthenticate = () => {
    return {
        type : actionType.IS_AUTHENTICATE
    }
}

export const Loggedin = (data) => {
    return{
        type : actionType.LOGIN,
        payload : data
    }
}

export const LogoutUser = () => {
    return{
        type : actionType.LOGOUT
    }
}