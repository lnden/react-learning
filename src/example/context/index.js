/**
 * @author Lnden
 * @date 2018/12/12
 * @desc
 *      React 组件之间的通信是基于 props 的单向数据流，即父组件通过 props 向子组件传值，亦或是子组件执行传入的函数来更新父组件的state，这都满足了我们大部分的使用场景。
 * 那 React 在兄弟组件之间如何通信呢?一般地，对于兄弟组件之间的通信，是通过它们共同的祖先组件进行的，即 Lifting State Up，官方文档也有介绍。组件一通过事件将状态变更通知它们共同的祖先组件，祖先组再将状态同步到组件二。
 * 但是，如果组件之间嵌套的比较深，即使提升状态到共同父组件，再同步状态到相应的组件还是需要一层一层的传递下去，可能会比较繁琐。
 *      官方推荐了context的用法
 *
 * 1.首先使用this.props 父组件向子组件传值 App => Header => SearchBtn => HeaderConttext
 * 2.使用context兄弟间传值
 *
 */

import React, { Component } from 'react'
import './index.css'


//页头部分
class Header extends Component {
    render(){
        return (
            <section className="header">
                {this.props.name}
                <SearchBtn  name={this.props.name}/>
            </section>
        )
    }
}
class SearchBtn extends Component {
    render(){
        return (
            <section>
                <button className="button">修改</button>
                <HeaderContext name={this.props.name}></HeaderContext>
            </section>

        )
    }
}
const HeaderContext = (props) =>
    <section>
        <div>{props.name}</div>
    </section>




//页脚部分
const Footer = () =>
      <section className="footer">
        <ul>
            <li>首页</li>
            <li>发现</li>
            <li>消息</li>
            <li>我的</li>
        </ul>
    </section>



//主体内容Context
class Context extends Component {
    render(){
        return (
            <section className="context">
                我是内容部分
                <Entry />
                <Banner />
                <List />
            </section>
        )
    }
}
class Entry extends Component {
    render(){
        return (
            <section className="entry">
                我是动态入口
                <ul>
                    <li>推荐</li>
                    <li>新闻</li>
                    <li>娱乐</li>
                    <li>头条</li>
                    <li>榜单</li>
                    <li>房产</li>
                    <li>运动</li>
                    <li>实时</li>
                </ul>
            </section>
        )
    }
}
class Banner extends Component {
    render(){
        return (
            <section className="banner">
                <ul>
                    <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=11206056,1618369034&fm=26&gp=0.jpg" alt="图1"/></li>
                </ul>
            </section>
        )
    }
}
class List extends Component {
    render(){
        let dataList = []
        for(let i=0;i<20;i++){
            dataList.push( <ul key={i}>
                <li>1.孟晚舟获保释，含泪对丈夫露出微笑</li>
                <li>2.锤子科技变更法定代表人：温洪喜代替罗永浩</li>
                <li>3.拼多多回应遭二清举报：举报方系售假商家，相关事项已于2017年披露</li>
                <li>4.知乎被曝裁员20% ，官方回应称是人员调整</li>
                <li>5.中国法院批准禁售部分iPhone机型</li>
                <li>6.苹果在埃及被指违犯反垄断法，须在60天内整改</li>
                <li>7.谷歌宣布提前4个月关闭Google+ 因新漏洞导致5250万用户信息泄露</li>
                <li>8.亚马逊多名员工因向第三方卖家泄露销售信息被解雇</li>
                <li>9.Linux Kernel 4.20 RC6发布</li>
                <li>10.QueryPHP 1.0.0-alpha.2发布，新增IViewUI通用后台权限系统</li>
            </ul>)
        }
        return (
            <section className="list">
                {dataList}
            </section>
        )
    }
}



//主方法
class App extends Component {
    render(){
        return (
            <section>
                <Header name="我是主页面内容！我是父亲App组件传递过来的"/>
                <Context />
                <Footer />
            </section>
        )
    }
}

export default App