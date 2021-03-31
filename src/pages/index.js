import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

import Main from './Main'
import {LoginGit} from './Logins'

//------ Route Definitions --------
export const PagesContent = () => {
    return (
        <Switch>
            <Redirect from="/" to="/Main" exact />
            
            <Route path="/Main" exact component={Main} />
            <Route path="/Logins/LoginGit" exact component={LoginGit} />

            { /*    404    */ }
            <Redirect to="/Main" />
        </Switch>
    );
};
