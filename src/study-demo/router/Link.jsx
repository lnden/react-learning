import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class App extends Component {
    render() {

        //  1、to: string
                // to="/home?name=lily"
        //  2、to: object
                // to = {{pathname: '', search: '', hash: '', state: ''}}
                // pathname: A string representing the path to link to.
                // search: A string representation of query parameters.
                // hash: A hash to put in the URL, e.g. #a-hash.
                // state: State to persist to the location.
        //  3、replace: bool
                // 如果为真，单击该链接将替换历史堆栈中的当前条目，而不是添加新的条目。
        //  4、innerRef: function
                // innerRef={refCallback}
                // const refCallback = node => {
                //     console.log(node)
                // }
        //  5、innerRef: RefObject
                //  innerRef={this.anchorRef}
                //  this.anchorRef = React.createRef()
        //  6、others
        return (
            <Router>
                <section>
                    <Headers />
                    <Content />
                </section>
            </Router>
        )
    }
}

class Headers extends Component {
    constructor(props) {
        super(props)
        this.anchorRef = React.createRef()
    }

    componentDidMount(){
        console.log(this.anchorRef)
    }
    render() {
        const refCallback = node => {
            console.log(node)
        }
        return (
            <header>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/home?name=lily" replace>关于我们</Link></li>
                    <li><Link to={{
                        pathname: "/discover",
                        search: "?sort=name",
                        hash: "#the-hash",
                        state: { fromDashboard: true }
                    }}>发现页面</Link></li>
                    <li><Link to="/message" innerRef={refCallback}>消息中心</Link></li>
                    <li><Link to="/phone" innerRef={this.anchorRef}>联系方式</Link></li>
                    <li><Link to="/setting">我的设置</Link></li>
                </ul>
            </header>
        )
    }
}


const Content = () =>
    <main>
        <Route exact path="/" component={Dashboard} />
        <Route path="/home" component={Home} />
        <Route path="/discover" component={Discover} />
        <Route path="/message" component={Message} />
        <Route path="/phone" component={Phone} />
        <Route path="/setting" component={Setting} />
    </main>


function Dashboard(){
    return <h1>我是首页内容2019年6月5日 14:19:36</h1>
}

function Home(){
    return <h1>我是关于我们页面2019年6月5日 14:20:02</h1>
}

function Discover({location,history}) {
    console.log('打印to对象里面的信息：',location)
    console.log('查看Link连接是否replace：',history,'查看length')
    return <h1>我是发现页面的内容2019年6月5日 14:20:23</h1>
}

function Message(){
    return <h1>我是消息信息页面2019年6月5日 14:53:47</h1>
}

function Phone(){
    return <h1>我是联系方式页面2019年6月5日 14:54:08</h1>
}

function Setting(){
    return <h1>我是用户设置页面2019年6月5日 14:54:31</h1>
}

export default App