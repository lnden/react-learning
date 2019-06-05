import React, { Component,Fragment } from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <section>
                    <h1>Switch 的详细介绍</h1>
                    <Headers />
                    <Content />
                </section>
            </Router>
        )
    }
}

const Headers = () => {
    return (
        <>
            <ul>
                <li><NavLink to="/">首页</NavLink></li>
                <li><NavLink to="/about">关于我们</NavLink></li>
                <li><NavLink to="/user">发现</NavLink></li>
            </ul>
        </>
    )
}


//  这里重点说一下 "/about"和"/:user"会同事北匹配到，所以这里应该使用Switch只展示一个
const Content = () => {
    return (
        <Fragment>
            {/* <Switch> */}
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About} />
                <Route path="/:user" component={Discover} />
            {/* </Switch> */}
        </Fragment>
    )
}


function Home() {
    return <h3>我是首页2019年6月5日 17:31:35</h3>
}

function About() {
    return <h3>我是关于我们页面2019年6月5日 17:31:58</h3>
}

function Discover() {
    return <h3>我是发现页面2019年6月5日 17:32:19</h3>
}
export default App