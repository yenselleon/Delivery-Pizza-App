import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';
import PublicRoute from './PublicRoute';

export const AppRouter = () => {
    return (
        <Router>
            <div >

                <Switch>

                    <PublicRoute path="/auth" component={AuthRouter} />
                    <Route path="/" component={MainRouter}/>

                    <Redirect to='/' />

                </Switch>

            </div>

        </Router>
    )
}
