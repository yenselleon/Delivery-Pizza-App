import React, { useContext, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";


import UserContext from '../context/UserContext/UserContext';
import UiItemsContext from '../context/UiItemsContext/UiItemsContext';

import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';
import PublicRoute from './PublicRoute';

export const AppRouter = () => {

    const {logged} = useContext(UserContext);

    const { itemsShoppingCart } = useContext(UiItemsContext);

    const auth = getAuth();

    useEffect(() => {
        
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
            console.log("usuario N°", uid)

            //Include Items on cart shopping in current user data 
            if(itemsShoppingCart.length > 0){
                
            }
        } else {
            // User is signed out
            // ...
            console.log("no hay usuario")
        }
        });

    }, [itemsShoppingCart, onAuthStateChanged])
    
    return (
        <Router>
            <div >

                <Switch>

                    <PublicRoute path="/auth" component={AuthRouter} isAuthenticated={logged}/>
                    <Route path="/" component={MainRouter}/>

                    <Redirect to='/' />

                </Switch>

            </div>

        </Router>
    )
}
