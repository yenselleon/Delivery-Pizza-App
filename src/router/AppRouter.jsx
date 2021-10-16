import React, { useContext, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import {collection, doc, setDoc, getDocs, query } from 'firebase/firestore/lite';
import { dbFirestore} from '../firebase/firebaseConfig';

import UserContext from '../context/UserContext/UserContext';
import UiItemsContext from '../context/UiItemsContext/UiItemsContext';

import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';
import PublicRoute from './PublicRoute';

const auth = getAuth();

export const AppRouter = () => {

    const {logged} = useContext(UserContext);

    const { itemsShoppingCart } = useContext(UiItemsContext);


    useEffect(() => {
        
        const verifiedIsAuth = onAuthStateChanged(auth, async(user) => {

            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
                
                //Include Items on cart shopping in current user data firestore
                if(itemsShoppingCart.length > 0){
                    console.log("usuario N°", uid)

                    //verified and get data items onHold in firestore

                    const collectionRefGetData = collection(dbFirestore, `shoppingData/${uid}/onHold`);
                    
                    const q = query(collectionRefGetData);

                    const getDocsSnapshot = await getDocs(q);

                    getDocsSnapshot.forEach((doc)=> {

                        const everyDocContent = doc.data();
                        const arrayDocs = Object.values(everyDocContent);

                        console.log(arrayDocs);
                    })

                    
                    const collectionRef = collection(dbFirestore, `shoppingData/${uid}/onHold`);

                    const docRef = doc(collectionRef)

                    //Add user aditional information 

                    await setDoc(docRef, {...itemsShoppingCart})
                        .then(()=> {
                            console.log("data anexada al firestore");
                        })
                        .catch((error)=>{
                            console.log({error});
                        })

                }else{

                }

            } else {
                // User is signed out
                // ...
                console.log("no hay usuario")
            }

            verifiedIsAuth();
        });

    }, [itemsShoppingCart.length, auth])
    
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
