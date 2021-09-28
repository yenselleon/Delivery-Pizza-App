import React from 'react'
import {
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Navbar from '../components/Navbar';
import CheckOutScreen from '../pages/CheckOutScreen';
import HomeScreen from '../pages/HomeScreen'

const MainRouter = () => {
    return (
        <>
            <Navbar/>

            <Switch>

                <Route exact path="/" component={HomeScreen} />
                <Route path="/checkout/" component={CheckOutScreen} />

                <Redirect to='/auth/' />

            </Switch>
        
        </>
    )
}

export default MainRouter;
