import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div >
                <Switch>

                    <Route path="/auth" component={AuthRouter} />
                    <Route path="/" component={MainRouter}/>

                    <Redirect to='/auth/' />

                </Switch>

            </div>

        </Router>
    )
}
