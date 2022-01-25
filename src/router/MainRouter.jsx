import { Container } from '@chakra-ui/layout';
import React, {useContext} from 'react'
import {
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Navbar from '../components/Navbar';
import OverlaySearchInputAutoComplete from '../components/OverlaySearchInputAutoComplete';
import CheckOutScreen from '../pages/CheckOutScreen';
import HomeScreen from '../pages/HomeScreen'
import PrivateRoute from './PrivateRoute';

import UserContext from '../context/UserContext/UserContext'
import UserAcountScreen from '../pages/UserAcountScreen';
import Footer from '../components/Footer';

const MainRouter = () => {

    const {logged} = useContext(UserContext)


    return (
        <Container
            maxWidth="100%"
            minHeight="100vh"
            p="0"
            pb={["71px", "10px"]}
            m="0"
            overflow="visible"
            bg="gray.100"
            position="relative"
        >
            <OverlaySearchInputAutoComplete/>

            <Navbar/>

            <Switch>

                <Route exact path="/" component={HomeScreen} />
                <PrivateRoute exact path="/checkout/:step/:uid" component={CheckOutScreen} isAuthenticated={logged}/>
                <PrivateRoute exact path="/checkout/:step/:uid/:purchaseTikectId" component={CheckOutScreen} isAuthenticated={logged}/>
                <PrivateRoute exact path="/myAcount" component={UserAcountScreen} isAuthenticated={logged}/>

                <Redirect to='/' />

            </Switch>

            <Footer/>
        
        </Container >
    )
}

export default MainRouter;
