import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
// import asyncComponent from '@/utils/asyncComponent'

import home from "../pages/home/index.jsx";
import record from '../pages/record/index.jsx'

export default class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={home} />
                    <Route path="/record" component={record} />
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        )
    }
}