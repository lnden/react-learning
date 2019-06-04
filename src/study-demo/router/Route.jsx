import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <section>
                    <h3>Route的是详细介绍</h3>
                    <ul>
                        <li><Link to="/">返回首页</Link></li>
                        <li><Link to="/discover/21">发现页面</Link></li>
                    </ul>
                    <main>
                        <p>内容展示区域</p>
                        <Route exact path="/" component={Home}/>
                        <Route path="/discover/:id" component={Discover}/>
                    </main>
                </section>
            </Router>
         
        )
    }
}

function Home({match,location,history}) {
    // console.log('match：',match)
    // console.log('location：',location)
    // console.log('history：',history)
    return <h1>Home</h1>
}

function Discover({match}) {
    return <h1>Hello,{match.params.id}</h1>
}
export default App