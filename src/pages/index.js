import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

import Main from './Main'
import ButtonList from './ButtonList';
import DropdownList from './DropdownList';
import RadioList from './RadioList';
import InputList from './InputList';
import LoginGit from './Logins/LoginGit';

//------ Route Definitions --------
export const PagesContent = () => {
    return (
        <Switch>
            <Redirect from="/" to="/main" exact />
            
            <Route path="/main" exact component={Main} />
            <Route path="/buttonlist" exact component={ButtonList} />
            <Route path="/dropdownlist" exact component={DropdownList} />
            <Route path="/radiolist" exact component={RadioList} />
            <Route path="/inputlist" exact component={InputList} />
            <Route path="/logins/logingit" exact component={LoginGit} />

            { /*    404    */ }
            <Redirect to="/main" />
        </Switch>
    );
};
