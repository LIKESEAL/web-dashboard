import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

import Main from './Main'
import LoginGit from './Logins/LoginGit'

//------ Route Definitions --------
export const PagesContent = () => {
    return (
        <Switch>
            <Redirect from="/" to="/main" exact />
            
            <Route path="/main" exact component={Main} />
            <Route path="/logins/logingit" exact component={LoginGit} />

            { /*    404    */ }
            <Redirect to="/main" />
        </Switch>
    );
};
