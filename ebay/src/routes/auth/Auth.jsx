import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Create from "./create/Create"
import Login from "./login/Login"
import './Auth.scss'

const Auth = () => {
    return (
        <div>
            <Switch>
                <Route path="/auth/create">
                    <Create />
                </Route>
                <Route path="/auth/login">
                    <Login />
                </Route>
            </Switch>
        </div>
    );
}

export default Auth;
