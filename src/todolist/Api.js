/**
 * @author Lindong Ding
 * @date 2018/11/14
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react'

class App extends Component {
    state = {
        data:[]
    };
    componentDidMount(){
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";
        fetch(url).then(result => result.json()).then(result=>{
            this.setState({
                data:result
            })
        })
    }
    render(){
        const { data } = this.state;
        const result = data.map((entry,index)=>{
            return <li key={index}>{entry}</li>
        })
        return <ul>{result}</ul>
    }
}

export default App