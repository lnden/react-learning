/**
 * @author Lnden
 * @date 2018/11/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react'

//按钮ES6组件
export default class Button extends Component {
    render(){
        const { onClick,className='',children } = this.props;
        return (
            <button
                onClick={onClick}
                className={className}
                type="button"
            >
                {children}
            </button>
        )
    }
}