import React from 'react'
import { HashRouter as Router, Route, Link, NavLink, Redirect, Switch } from 'react-router-dom'
import './index.css'
//把 BrowserRouter 转换为 Router
//把 HashRouter 转换为 Router

/**
 *
 *  @param
 *      BrowserRouter
 *          - basename: string | <BrowserRouter basename="/calendar"/>  <Link to="/today"/>  // renders <a href="/calendar/today">
 *          - forceRefresh: bool | forceRefresh={!supportsHistory}  const supportsHistory = 'pushState' in window.history   // true切换页面使用全页刷新，该方法在不支持H5历史记录浏览器中使用
 * 
 *      HashRouter
 *      Router
 * 
 *      Link
 *          - to: string || object
 *          - replace: bool
 *          - innerRef: function
 *          - innerRef: RefObject
 * 
 *      NavLink
 *          - activeClassName: string
 *          - activeStyle: object
 *          - exact: bool   //当为真时，仅当位置完全匹配时才应用活动类/样式。
 *          - strict: bool  //未解
 *          - isActive: func    //判断URL是否正确
 *      Route
 *
 */


const Home = () =>
    <section>
        <h3>我是Home页面</h3>
        <main>我是主体内容部分</main>
    </section>

const About = (value) =>{
    console.log(value,11)
    return (
        <section>
            <h3>我是About页面</h3>
            <main>我是主体内容部分</main>
        </section>
    )
}
    

const Topics = () =>
    <section>
        <h3>我是讨论页面</h3>
        <main>我是主体内容部分</main>
    </section>


const activeClassName = () => 
    <section>
        <h3>我是新activeClassName</h3>
        <main>我是新的activeClassName内容</main>
    </section>


const activeStyle = () => 
    <section>
        <h3>我是新activeStyle</h3>
        <main>我是新的activeStyle内容</main>
    </section>


const isActive = () => 
    <section>
        <h3>我是新isActive</h3>
        <main>我是新的isActive内容</main>
    </section>


const newArray = () => 
    <section>
        <h3>我是新newArray</h3>
        <main>我是新的newArray内容</main>
    </section>

// -------------------------------------------------------------------------------
const BasicExample = () => {
    const params = {
        pathname: '/about',
        search: '?sort=name',
        hash: '#the-hash',
        state: { fromDashboard: true }
    }

    const refCallback = node => {
        // console.log(node.setAttribute('href','/about')) 
        // console.log(node.getAttribute('href'))
        // console.log(node.innerHTML)
    }

    const anchorRef = React.createRef()

    
    const oddEvent = (match, location) => {
        //console.log(match,11)
        //console.log(location,22)
        if (!match) {
            return true
        }
        const eventID = parseInt(match.params.eventID)
        return !isNaN(eventID) && eventID % 2 === 1
    }

    return (
        <Router>
            <section>
                <ul>
                    <li><Link to="/" innerRef={refCallback}>主页</Link></li>
                    <li><Link to={params} replace >关于我们</Link></li>
                    <li><Link to="/topics" innerRef={anchorRef}>讨论</Link></li>
                    <NavLink to="/activeClassName" activeClassName="selected" >activeClassName属性</NavLink>
                    <br/>
                    <NavLink 
                        exact
                        to="/activeStyle" 
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#909",
                            fontSize:'26px'
                          }} 
                    >activeStyle属性</NavLink>
                    <br/>
                    <NavLink to="/isActive/123" isActive={oddEvent} >isActive属性</NavLink>
                    <br/>
                    <NavLink to="/users/12">newArray属性</NavLink>
                    <NavLink to="/profile/12">newArray属性</NavLink>
                </ul>

                <hr/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics}/>
                    <Route path="/activeClassName" component={activeClassName}/>
                    <Route path="/activeStyle" component={activeStyle}/>
                    <Route path="/isActive" component={isActive}/>
                    <Route path={["/users/:id", "/profile/:id"]} component={newArray} />
                    <Redirect to="/" /> 
                </Switch>
            </section>
        </Router>
    )
};


/**
 *  Route属性
 *      1、exact是一种严格匹配模式
 *          false 时，根据路由匹配所有组件 "/"、"/home"、"/home/menu"
 *          true 时，则匹配"/"，无法匹配到"/home"
 */

export default BasicExample