import { useDisclosure } from '@chakra-ui/hooks';
import { Container } from '@chakra-ui/layout';
import React from 'react'
import {
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Navbar from '../components/Navbar';
import OverlaySearchInputAutoComplete from '../components/OverlaySearchInputAutoComplete';
import CheckOutScreen from '../pages/CheckOutScreen';
import HomeScreen from '../pages/HomeScreen'

const MainRouter = () => {

    


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
                <Route path="/checkout/" component={CheckOutScreen} />

                <Redirect to='/auth/' />

            </Switch>
        
        </Container >
    )
}

export default MainRouter;
