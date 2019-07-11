import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <section>
                    <h1>Route 的详细介绍</h1>
                    <ul>
                        <li><Link to="/">返回首页</Link></li>
                        <li><Link to="/discover/21">发现页面[component]</Link></li>
                        <li><Link to="/message">消息页面[render内联]</Link></li>
                        <li><Link to="/cool">关于我们[render包裹]</Link></li>
                        <ListItemLink to="/somewhere"/>    
                    </ul>
                    <main>
                        <p>内容展示区域三种渲染页面的方式</p>
                        <Components />
                        <Render />
                        <FadingRoute path="/cool" component={Something}/>
                        <Route children={({ match, ...rest }) => {
                            // console.log(match)
                            return (
                                <div>
                                    {match && <Something {...rest}/>}
                                </div>
                            )
                        }}/>
                    </main>
                </section>
            </Router>
         
        )
    }
}

//  1、使用 component 方式渲染UI展示
const Components = () => {
    return (
        <>
            <Route exact path="/" component={Home}/>
            <Route path="/discover/:id" component={Discover}/>
        </>
    )
}

//  2.1、使用 render: func 内联方式渲染UI展示
const Render = () => {
    return (
        <>
            <Route path="/message" render={() => <h1>Message Page</h1>}/>
        </>
    )
}

//  2.2、使用 Render 包裹方式渲染UI展示
const Something = (props) => {
    // console.log(props)
    return (
        <section>
            测试内容
        </section>
    )
}
const FadingRoute = ({ component: Component, ...rest }) => {
    // console.log(rest)
    return (
        <Route {...rest} render={props => {
            // console.log(props)
            return (
         
                <Component {...props}/>
        
        )}}/>
    )
}


//  3、使用 children: func 方式渲染UI展示
const ListItemLink = ({to,...rest}) => {
    // console.log(to)
    return (
        <Route 
            path={to}
            children={({match})=>{
                return (
                    <li className={match?"active":""}>
                        <Link to={to} {...rest}>系统设置[children render]</Link>
                    </li>
                )
            }}
        />
    )
}


function Home({match,location,history}) {
    // console.log('match：',match)
    // console.log('location：',location)
    // console.log('history：',history)
    return <h3>Home Page</h3>
}

function Discover({match}) {
    return <h3>Discover Page,{match.params.id}</h3>
}
export default App