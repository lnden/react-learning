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
import Discover from '../pages/Discover'
import Message from '../pages/Message'
import Personal from '../pages/Personal'

export default class App extends Component {
    render(){
        return (
            <section>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/discover" component={Discover}/>
                        <Route path="/message" component={Message}/>
                        <Route path="/personal" component={Personal}/>
                    </Switch>
                </BrowserRouter>
            </section>
        )
    }
}