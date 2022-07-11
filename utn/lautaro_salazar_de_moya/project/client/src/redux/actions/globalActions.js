import { CHANGE_LOGGED_IN, SESSION_STATE } from "../constants/globalConstants"


export const changeLoggedIn = (isLoggedIn) =>{
    return {
        type: CHANGE_LOGGED_IN,
        payload: isLoggedIn,
    };
}

export const loadUserData= (userData) =>{
    return {
        type: SESSION_STATE,
        payload: userData
    }
}