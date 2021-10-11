import React from 'react'
import {
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import LaunchScreen from '../pages/LaunchScreen';
import LoginScreen from '../pages/LoginScreen';
import ProffScreen from '../pages/ProffScreen';
import RegisterScreen from '../pages/RegisterScreen';

const AuthRouter = () => {
    return (
        <Switch>

            <Route exact path="/auth/" component={LaunchScreen} />
            <Route exact path="/auth/examples" component={ProffScreen} />
            <Route exact path="/auth/login" component={LoginScreen} />
            <Route path="/auth/register" component={RegisterScreen} />

            <Redirect to="/auth"/>

        </Switch>
    )
}

export default AuthRouter;
