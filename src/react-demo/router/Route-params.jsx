import React, { Component,Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <Router>
                <section>
                    <h1>RouteParams 的详细介绍</h1>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/users/users">Path使用方式一</Link></li>
                        <li><Link to="/profile/profiles">Path使用方式一</Link></li>
                    </ul>
                    <main>
                        <p>内容展示区域Route的属性集合</p>
                        <Route exact path="/" component={Home} />
                        <Paths />
                    </main>
                </section>
            </Router>
        )
    }
}


//  1、path: string | string[]
const Paths = () => {
    return (
        <Fragment>
            <Route path={['/users/:id','/profile/:id']} component={Discover}/>
        </Fragment>
    )
}


//  2、exact: bool
/**
 *  为 true 时，则要求路径与  location.pathname  必须完全匹配。通过下表解释一下：
 *  path            location.pathname           exact           是否匹配
 * 
 *  /one            /one/two                    true            no
 *  /one            /one/two                    false           yes
 * 
 */


//  3、strict: bool
/**
 *  为  true 时，有结尾斜线的路径只能匹配有斜线的  location.pathname  。见下表：
 *  path            location.pathname           是否匹配
 * 
 *  /one/           /one                        no
 *  /one/           /one/                       yes
 *  /one/           /one/two                    yes
 */


//  4、location: object
/**
 *  存入一些对象信息，match、location、history
 */


//  5、sensitive: bool
/**
 *  当为true时，如果路径区分大小写，则匹配。
 *  path            location。pathname          sensitive       matches
 * 
 *  /one            /one                        true            yes 
 *  /One            /one                        true            no
 *  /One            /one                        false           yes
 */

function Home() {
    return (
        <div>
            <span>1、path: string</span>
            <h3>Home Page</h3>
        </div>
    )
}

function Discover({match}) {
    return (
        <div>
            <span>1、path: string[]</span>
            <h3>Discover Page => <span style={{color:'#909'}}>{match.params.id}</span></h3>
        </div>
    )
}

export default App