/**
 * @author Lnden
 * @date 2018/11/21
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'
import Praise from '../pages/Praise'
import Treasure from '../pages/Treasure'
import Friend from '../pages/Friend'
import Personal from '../pages/Personal'

import Public from '../components/public/index.js'

export default class App extends Component {
    render(){
        return (
            <section>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/public" component={Public}/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/treasure" component={Treasure}/>
                        <Route path="/praise" component={Praise}/>
                        <Route path="/friend" component={Friend}/>
                        <Route path="/personal" component={Personal}/>
                    </Switch>
                </BrowserRouter>
            </section>
        )
    }
}