import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
// import asyncComponent from '@/utils/asyncComponent'

import home from '@/react-init/pages/home/home.jsx'
import balance from '@/react-init/pages/balance/balance.jsx'
import helpcenter from '@/react-init/pages/helpcenter/helpcenter.jsx'
import production from '@/react-init/pages/production/production.jsx'
import record from '@/react-init/pages/record/record.jsx'

export default class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={home} />
                    <Route path="/balance" component={balance} />
                    <Route path="/helpcenter" component={helpcenter} />
                    <Route path="/production" component={production} />
                    <Route path="/record" component={record} />
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        )
    }
}