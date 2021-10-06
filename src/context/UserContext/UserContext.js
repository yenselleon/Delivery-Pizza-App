import React, { createContext, useReducer } from "react";
import { UserContextReducer } from "./UserContextReducer";
import * as fs from 'fs'

const UserContext = createContext();


const initialState = {
    userData: [],
    user: null,
    logged: false,
}

const UserContextProvider = ({children})=> {

    const [state, dispatch] = useReducer(UserContextReducer, initialState)


    const data = {
        user: state.user,
        logged: state.logged,
    }

    return (
        <UserContextProvider.Provider value={data}>
            {children}
        </UserContextProvider.Provider>
    )

}

export {UserContextProvider};
export default UserContext;