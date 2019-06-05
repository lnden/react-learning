import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <section>
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
                <li><NavLink to="/">主页</NavLink></li>
                <li><NavLink to="/about">关于我们</NavLink></li>
                <li><NavLink to="/discover">发现页面</NavLink></li>
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
    return <h1>我是首页2019年6月5日 15:40:11</h1>
}

function About() {
    return <h1>我是关于我们页面2019年6月5日 15:40:32</h1>
}

function Discover() {
    return <h1>我是发现页面2019年6月5日 15:40:59</h1>
}
export default App