import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import {Routes} from 'config/Routes';
import Home from 'views/Home';

class MainLayout extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact component={Home} path={Routes.Home}/>
                </Switch>
            </div>
        );
    }
}

export default MainLayout;