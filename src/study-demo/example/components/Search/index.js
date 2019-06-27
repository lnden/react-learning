/**
 * @author Lnden
 * @date 2018/11/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react';

export default class Search extends Component {
    //使用ref 进行获取焦点
    componentDidMount(){
        if(this.input){
            this.input.focus();
        }
    }
    render(){
        const {value,onChange,children,onSubmit } = this.props;
        return (
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    ref={(node)=>{this.input = node}}
                />
                <button type="submit">{children}</button>
            </form>
        )
    }
}