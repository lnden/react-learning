import React, { Component } from 'react'

import { HashRouter, Link, Route } from 'react-router-dom'


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

        //  3、hashType: string  [slash、noslash、hashbang]  
        //      slash：http://localhost:3000/#/config/
        //      noslash：http://localhost:3000/#config/
        //      hashbang：http://localhost:3000/#!/config
        const optionalStr = 'slash'
        
        //  5、children: node

        return (
            <section>
                <HashRouter 
                     basename={optionalString}
                     getUserConfirmation={optionalFunc('Are you sure?',()=>{
                         console.log(1111)
                     })}
                     hashType={optionalStr}
                >
                    <Headers />
                    <Content />
                </HashRouter>
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
    return <h3>我是首页内容</h3>
}

function Discover(){
    return <h3>我是发现页面内容</h3>
}

export default App