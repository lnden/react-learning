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

    render(){
        return (
            <section>
                <h3>事件对象</h3>
                <button project="1234" onClick={this.getData}>事件对象</button>

                <hr/>

                <h3>表单事件</h3>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.getInput}>获取input的值</button>

                <hr/>

                <h3>通过ref获取dom节点</h3>
                
            </section>
        )
    }
}

export default App