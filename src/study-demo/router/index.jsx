import React from 'react'
import { BrowserRouter as Router,HashRouter,BrowserRouter,Route,Link } from 'react-router-dom'

//把BrowserRouter转换为Router
/**
 *
 *  @param
 *      BrowserRputer
 *          - basename: string | <BrowserRouter basename="/calendar"/>  <Link to="/today"/>  // renders <a href="/calendar/today">
 *          - forceRefresh: bool | forceRefresh={!supportsHistory}  const supportsHistory = 'pushState' in window.history   // true切换页面使用全页刷新，该方法在不支持H5历史记录浏览器中使用
 * 
 *      HashRouter
 *      Router
 * 
 *      Link
 *      Route
 *
 */


const Home = () =>
    <section>
        <h3>我是Home页面</h3>
        <main>我是主体内容部分</main>
    </section>

const About = () =>
    <section>
        <h3>我是About页面</h3>
        <main>我是主体内容部分</main>
    </section>

const Topics = () =>
    <section>
        <h3>我是讨论页面</h3>
        <main>我是主体内容部分</main>
    </section>


const BasicExample = () => {
    return (
        <HashRouter>
            <section>
                <ul>
                    <li><Link to="/">主页</Link></li>
                    <li><Link to="/about">关于我们</Link></li>
                    <li><Link to="topics">讨论</Link></li>
                </ul>

                <hr/>

                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>
            </section>
        </HashRouter>
    )
};


/**
 *  Route属性
 *      1、exact是一种严格匹配模式
 *          false 时，根据路由匹配所有组件 "/"、"/home"、"/home/menu"
 *          true 时，则匹配"/"，无法匹配到"/home"
 */

export default BasicExample