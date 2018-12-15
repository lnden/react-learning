/**
 * @author Lnden
 * @date 2018/12/15
 * @desc 组件描述
 * @param 组件引用位置
 */

import React, { Component } from 'react'

class App extends Component{
    constructor() {
        super();
        this.state = {
            username:''
        };
        this.getData = this.getData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getInput = this.getInput.bind(this);
        this.handleChangeRef = this.handleChangeRef.bind(this);
        this.handleKeyup = this.handleKeyup.bind(this)

    }

    getData(event){
        event.target.style.background='red';
        event.target.style.color='#fff';
        console.log("%c可以获取自定义属性：","color:#090",event.target.getAttribute('project'))
    }
    handleChange(event){
        this.setState({
            username:event.target.value
        })
    }
    getInput(){
        console.log(this.state.username)
    }
    handleChangeRef(){
        let value = this.refs.username.value;
        this.setState({
            username:value
        })
    }
    handleKeyup(event){
        if(event.keyCode===13){
            console.log(event.target.value)
        }
    }



    render(){
        return (
            <section>
                <h3>事件对象</h3>
                <button project="1234" onClick={this.getData}>事件对象</button>

                <hr/>

                <h3>表单事件</h3>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.getInput}>事件对象获取input的值</button>

                <hr/>

                <h3>通过ref获取dom节点</h3>
                <input ref="username" type="text" onChange={this.handleChangeRef}/>
                <button onClick={this.getInput}>ref获取input的值</button>

                <hr/>

                <h3>键盘事件</h3>
                <input type="text" onKeyUp={this.handleKeyup}/>
                <button>输入完成之后按回车键!</button>
            </section>
        )
    }
}

export default App