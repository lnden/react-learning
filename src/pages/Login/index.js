/**
 * @author Lnden
 * @date 2018/11/21
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react'
import './index.css'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'admin',
            password:'123456'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        const { name,password }  = this.state;
        if(name === 'admin' && password === '123456'){
            this.props.history.push('/')
        }else{
            alert('用户名或者密码错误~')
        }
        event.preventDefault()
    }

    handleChange(event){
        let target = event.target;
        if(target.type === 'text'){
            this.setState({
                name:target.value
            })
        }else{
            this.setState({
                password:target.value
            })
        }
    }

    render(){
        const { name,password } = this.state;
        return (
            <section className="login">
                <form className="form-box" onSubmit={this.handleSubmit}>
                    <input className="firstInput" type="text" value={name} onChange={this.handleChange}/><br/>
                    <input type="password" value={password} onChange={this.handleChange}/><br/>
                    <input className="submit" type="submit" value="登录" />
                </form>
            </section>
        )
    }
}