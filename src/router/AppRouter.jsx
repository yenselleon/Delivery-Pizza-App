import React, { useContext, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import {collection, doc, setDoc, getDocs, query, where } from 'firebase/firestore/lite';
import { dbFirestore} from '../firebase/firebaseConfig';

import UserContext from '../context/UserContext/UserContext';
import UiItemsContext from '../context/UiItemsContext/UiItemsContext';

import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';
import PublicRoute from './PublicRoute';

const auth = getAuth();

export const AppRouter = () => {

    const {logged} = useContext(UserContext);

    const { itemsShoppingCart, pushItemToShoppingCart } = useContext(UiItemsContext);


    useEffect(() => {
        
        const verifiedIsAuth = onAuthStateChanged(auth, async(user) => {

            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...

                //ref coleccion docs
                const collectionOnHoldRef = collection(dbFirestore, `shoppingData/${uid}/items`);
                const q = query(collectionOnHoldRef, where("status", "==", "onHold"));
                const getDocsSnapshot = await getDocs(q);

                //ids items in shoppping cart
                const uidItemsShoppingCartArr = itemsShoppingCart.map((item)=> item?.id)

                //Include Items on cart shopping in current user data firestore
                if(itemsShoppingCart.length > 0){

                    console.log("usuario N°", uid)
                    

                    let uidSnapshotDocsArr = []
                    
                    getDocsSnapshot.forEach((doc)=> {

                        const everyDocContent = doc.data();
                        const arrayDocs = Object.values({everyDocContent});
                        arrayDocs.map((item)=> uidSnapshotDocsArr.push(item.id))

                    })
                    
                    //include in firebase itemsShoppingcart
                    itemsShoppingCart.forEach(async(item)=> {

                        if(!uidSnapshotDocsArr.includes(item.id)){
                            
                            //Add items on shopping cart
        
                            const docRef = doc(collectionOnHoldRef, item.id)
        
                            await setDoc(docRef, item)
                                .then(()=> {
                                    console.log("data anexada al firestore");
                                })
                                .catch((error)=>{
                                    console.log({error});
                                })


                            //verified and get data items onHold in firestore
                            getDocsSnapshot.forEach((doc)=> {

                                const everyDocContent = doc.data();
                                
                                if(!uidItemsShoppingCartArr.includes(everyDocContent.id)){
        
                                    pushItemToShoppingCart(everyDocContent);
                                    console.log("Push item on cart: ",everyDocContent.id)
        
                                }
                            })
                        }

                    })
                    
                }else{
                    //verified and get data items onHold in firestore
                    getDocsSnapshot.forEach((doc)=> {

                        const everyDocContent = doc.data();
                        
                        if(!uidItemsShoppingCartArr.includes(everyDocContent.id)){

                            pushItemToShoppingCart(everyDocContent);
                            console.log("Push item on cart: ",everyDocContent.id)

                        }
                    })

                }

            } else {
                // User is signed out
                // ...
                console.log("no hay usuario")
            }

            verifiedIsAuth();
        });

    }, [itemsShoppingCart.length, auth, logged])
    
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
