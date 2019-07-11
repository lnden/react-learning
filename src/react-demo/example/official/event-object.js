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
        this.handleKeyup = this.handleKeyup.bind(this);
        // this.setUsername = this.setUsername(this);

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
    setUsername =()=>{
        //为什么这个方法使用ES6来编写?如果还在初始化就绑定this会出现报错，立即修改state，state还没初始化
        //还可以在 onClick={this.setUsername.bind(this)}
        this.setState({
            username:'初始化默认值yes~'
        })
    };


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
                <span>输入完成之后按回车键!</span>

                <hr/>

                <h3>双向数据绑定</h3>
                {/*model改变影响view，view改变反过来影响model*/}
                {/*直接绑定value会出现警告，可以使用defaultValue={}*/}
                {/*<input type="text" defaultValue={this.state.username}/>*/}
                <input type="text" value={this.state.username} onChange={this.handleChange}/>
                <span>{this.state.username}</span>
                <p></p>
                <button onClick={this.setUsername}>改变username的初始值</button>
            </section>
        )
    }
}

export default App