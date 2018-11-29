/**
 * @author Lnden
 * @date 2018/11/29
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react';
import Header from '../header'

export default class Public extends Component {
    render(){
        return (
            <div>
                <Header type="公共组件"/>
                我是公共页面的内容，模拟测试！
            </div>
        )
    }
}