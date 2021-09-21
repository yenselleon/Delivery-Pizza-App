import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import AuthRouter from './AuthRouter';
import HomeScreen from '../pages/HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
            <Switch>

                <Route path="/auth" component={AuthRouter} />
                <Route exact path="/" component={HomeScreen}/>

                <Redirect to='/auth/' />

            </Switch>

            </div>

        </Router>
    )
}
