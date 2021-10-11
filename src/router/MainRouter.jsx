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
                <PrivateRoute path="/checkout/" component={CheckOutScreen} isAuthenticated={logged}/>

                <Redirect to='/' />

            </Switch>
        
        </Container >
    )
}

export default MainRouter;
