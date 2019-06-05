import React, { Component } from 'react'

import { BrowserRouter, Link, Route } from 'react-router-dom'


class App extends Component {
    render() {
        //  1、basename: string
        const optionalString = 'config'

        //  2、getUserConfirmation: func
        function optionalFunc(message, callback) {
            console.log(message)
            const allowTransition = window.confirm(message);
            callback(allowTransition);
        }

        //  3、forceRefresh: bool
        const optionalBool = true

        //  4、keyLength: number
        //  {pathname: "/", search: "", hash: "", state: undefined, key: "k9ubky"}
        const optionalNumber = 6
        
        //  5、children: node

        return (
            <section>
                <BrowserRouter 
                     basename={optionalString}
                     getUserConfirmation={optionalFunc('Are you sure?',()=>{
                         console.log(1111)
                     })}
                     forceRefresh={optionalBool}
                     keyLength={optionalNumber}
                >
                     <h1>BrowserRouter 的详细介绍</h1>
                    <Headers />
                    <Content />
                </BrowserRouter>
                <p>TEST</p>
            </section>
        )
    }
}

const Headers = () =>
    <header>
        <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/discover">发现</Link></li>
        </ul>
    </header>

const Content = () =>
    <main>
        <Route exact path="/" component={Home} />
        <Route path="/discover" component={Discover} />
    </main>


function Home({location}){
    console.log('查看keyLength：',location)
    return <h3>我是首页内容</h3>
}

function Discover(){
    return <h3>我是发现页面内容</h3>
}

export default App