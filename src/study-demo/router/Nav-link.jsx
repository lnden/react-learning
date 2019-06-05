import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './index.css'

class App extends Component {
    render() {
        return (
            <Router>
                <section>
                    <h1>NavLink 的详细介绍</h1>
                    <Headers />
                    <Context />
                </section>
            </Router>
        )
    }
}

const Headers = () => {
    return (
        <Fragment>
            <ul>
                <li><NavLink to="/" activeClassName="selected" >主页</NavLink></li>
                <li><NavLink to="/about" activeClassName="selected" >关于我们</NavLink></li>
                <li><NavLink to="/discover" activeClassName="selected" >发现页面</NavLink></li>
            </ul>
        </Fragment>
    )
}

const Context = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/discover" component={Discover}/>
        </>
    )
}


function Home() {
    return <h3>我是首页2019年6月5日 15:40:11</h3>
}

function About() {
    return <h3>我是关于我们页面2019年6月5日 15:40:32</h3>
}

function Discover() {
    return <h3>我是发现页面2019年6月5日 15:40:59</h3>
}
export default App