/**
 * Create By DingLindong on 2018/3/29
 */
import React from 'react'

class Objectdata extends React.Component{
    render(){
        return <div>
            {/*<h3>我是使用对象方式传递的组件</h3>*/}
            {/*<p>我的身份：{this.props.data.job}</p>*/}
            {/*<p>我正在干的事情：{this.props.data.ing}</p>*/}
            {/*<p>争取多久学会React：{this.props.data.time}</p>*/}

            <h3>我是使用对象方式传递的组件</h3>
            <p>我的身份：{this.props.job}</p>
            <p>我正在干的事情：{this.props.ing}</p>
            <p>争取多久学会React：{this.props.time}</p>
        </div>
    }
}

export default Objectdata