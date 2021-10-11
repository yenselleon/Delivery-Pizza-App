import React, { createContext, useEffect, useReducer } from "react";
import {getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from 'firebase/auth'
import {collection, doc, setDoc, getDoc } from 'firebase/firestore/lite'

import { UserContextReducer } from "./UserContextReducer";
import { types } from "../types";
import { dbFirestore} from '../../firebase/firebaseConfig'


const UserContext = createContext();


const init = ()=> {
    return {
        user: JSON.parse(localStorage.getItem('user')) || null,
        logged: JSON.parse(localStorage.getItem('logged')) || false,
    }
}

const auth = getAuth();

const UserContextProvider = ({children})=> {

    const [state, dispatch] = useReducer(UserContextReducer, {}, init)


    useEffect(() => {
        
        localStorage.setItem( 'user', JSON.stringify(state.user));
        localStorage.setItem( 'logged', JSON.stringify(state.logged));

    }, [state.user, state.logged])
    
    const createNewUser = async(userData = {})=> {
        
        const {email, password, confirmPassword, ...rest} = userData;

        
        await createUserWithEmailAndPassword(auth, email, password)
            .then( async(userCredential)=> {
                
                const collectionRef = collection(dbFirestore, 'userData');

                const docRef = doc(collectionRef, `${userCredential.user.uid}`)

                //Add user aditional information 

                await setDoc(docRef, {...rest})
                    .then()
                    .catch((error)=>{
                        console.log({error});
                    })

                console.log("createUser")
                
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });


        //Add user in the state
        dispatch({
            type: types.addUserState,
            payload: {
                email,
                ...rest,
            }
        })

    }
    
    //Login usser function
    const loginUser = async(userData = {})=> {

        const {email, password} = userData;
            
        await signInWithEmailAndPassword(auth, email, password)
            .then(  async(userCredential)=> {

                const collectionRef = collection(dbFirestore, 'userData');

                const docRef = doc(collectionRef, `${userCredential.user.uid}`)

                await getDoc(docRef)
                .then( async(snapshot)=> {

                    
                    console.log('data', snapshot.data())

                    dispatch({
                        type: types.loginUser,
                        payload: {
                            ...snapshot.data(),
                            email,
                        }
                    })
                })
                .catch((error)=> {
                    console.log(error);
                })
                

            }).catch((error)=> {
                console.log(error)
            })

    }

    const singOutUser = async()=> {

        await signOut(auth).then(()=> {
            console.log("Sign-out successful")
        })
        .catch((error)=> {
            console.log(error)
        })

        localStorage.removeItem('user')
        localStorage.removeItem('logged')

        dispatch({
            type: types.logOut,
        })
    }


    const data = {
        user: state.user,
        logged: state.logged,
        createNewUser,
        singOutUser,
        loginUser
    }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )

}

export {UserContextProvider};
export default UserContext;