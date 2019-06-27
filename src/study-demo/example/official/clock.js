/**
 * @author Lnden
 * @date 2018/11/14
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */
import React, { Component } from 'react'

class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {date:new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(() =>
            this.tick(), 1000);
    }
    componentWillMount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date:new Date()
        })
    }

    render(){
        return (
            <div>
                <h1>hello,react</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}


export default class App extends Component {
    render(){
        return (
            <div>
                <Clock/>
            </div>
        )
    }
}