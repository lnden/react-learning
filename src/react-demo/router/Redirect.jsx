import React, { Component,Fragment } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <section>
                    <h1>Redirect 的详细介绍</h1>
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
                <li><Link to="/">主页</Link></li>
                <li><Link to="/about">关于我们</Link></li>
                <li><Link to="/discover">发现</Link></li>
            </ul>
        </>
    )
}

const Content = () => {
    return (
        <Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/discover" component={Discover} /> 
        </Fragment>
    )
}

function Home() {
    return <h3>我是首页面，哈哈2019年6月5日 17:53:34</h3>
}

function About() {
    return <h3>我是关于我们的页面，哈哈2019年6月5日 17:53:56</h3>
}

function Discover() {
    return <h3>我是发现的页面，哈哈2019年6月5日 17:54:26</h3>
}
export default App