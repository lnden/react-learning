/**
 * @author Lnden
 * @date 2018/11/21
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

export default class CommFooter extends Component {
    render(){
        return (
            <article className="public-footer">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="selected">首页</NavLink>
                    </li>
                    <li>
                        <NavLink to="/discover" activeClassName="selected">发现</NavLink>
                    </li>
                    <li>
                        <NavLink to="/message" activeClassName="selected">消息</NavLink>
                    </li>
                    <li>
                        <NavLink to="/personal" activeClassName="selected">我的</NavLink>
                    </li>
                </ul>
            </article>
        )
    }
}