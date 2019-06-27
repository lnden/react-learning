/**
 * @author Lnden
 * @date 2018/12/15
 * @desc 组件描述
 * @param 组件引用位置
 */

import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super();
        // this.setMessage = this.setMessage.bind(this)
        this.state = {
            message:'我是准备被修改的数据'
        }
    }
    setMessage = (str) => {
        console.log(str);
        this.setState({
            message:str
        })
    };
    render(){
        return (
            <section>
                <p>{this.state.message}</p>
                <button onClick={(e)=>this.setMessage('测试',e)}>绑定事件传值方式一</button>
                <button onClick={this.setMessage.bind(this,'测试')}>绑定事件传值方式二 </button>
            </section>
        )
    }
}

export default App