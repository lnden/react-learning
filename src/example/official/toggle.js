/**
 * @author Lnden
 * @date 2018/11/14
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn:true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state=>({
            isToggleOn:!state.isToggleOn
        }))
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON':'OFF'}
            </button>

        )
    }
}