import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ScreenRoute } from './ScreenRoute';
import { ScreenEditorRoute } from './ScreenEditorRoute';
import { HomeRoute } from './HomeRoute';

const element = <HashRouter>
    <div>
        <Switch>
            <Route exact path="/:user/:screenId" component={ScreenRoute} />
            <Route exact path="/:user/:screenId/edit" component={ScreenEditorRoute} />
            <Route component={HomeRoute} />
        </Switch>
    </div>
</HashRouter>
ReactDOM.render(element, document.getElementById('root'));