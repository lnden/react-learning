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
// require('//at.alicdn.com/t/font_774677_m4ixyv24l09.css')

export default class CommFooter extends Component {
    render(){
        return (
            <article className="public-footer">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="selected">
                            <i className="iconfont icon-_bendicang"></i>首页
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/discover" activeClassName="selected">
                            <i className="iconfont icon-_wyshenji"></i>发现
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/message" activeClassName="selected">
                            <i className="iconfont icon-_muyue"></i>消息
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/personal" activeClassName="selected">
                            <i className="iconfont icon-_jinhuodl"></i>我的
                        </NavLink>
                    </li>
                </ul>
            </article>
        )
    }
}