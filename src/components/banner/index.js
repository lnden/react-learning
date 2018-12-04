/**
 * @author Lnden
 * @date 2018/12/4
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react';
import './index.css'

export default class Banner extends Component {
    render(){
        return (
            <section className="al-banners">
                <ul>
                    <li>我是图1</li>
                    <li>我是图2</li>
                    <li>我是图3</li>
                </ul>
            </section>
        )
    }
}