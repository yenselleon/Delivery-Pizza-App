import { types } from "../types";




export const UserContextReducer = (state, action)=> {
    const {type, payload} = action;


    switch (type) {
        case types.addUserState:
            return {
                ...state,
                user: payload,
                logged: true
            }
        case types.logOut:
            return {
                ...state,
                user: null,
                logged: false
            }
        case types.loginUser:
            return {
                ...state,
                user: payload,
                logged: true,
            }

    
        default:
            return state;
    }
}