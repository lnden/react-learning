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
// require('./font');   //不起作用

export default class PublicFooter extends Component {
    render(){
        return (
            <article className="public-footer">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="selected">
                            <svg className="svg-icon" aria-hidden="true">
                                <use xlinkHref="#icon-homepage_fill"></use>
                            </svg>
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/treasure" activeClassName="selected">
                            <svg className="svg-icon" aria-hidden="true">
                                <use xlinkHref="#icon-transaction_fill"></use>
                            </svg>
                            <span>财富</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/praise" activeClassName="selected">
                            <svg className="svg-icon" aria-hidden="true">
                                <use xlinkHref="#icon-shop_fill"></use>
                            </svg>
                            <span>口碑</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/friend" activeClassName="selected">
                            <svg className="svg-icon" aria-hidden="true">
                                <use xlinkHref="#icon-group_fill"></use>
                            </svg>
                            <span>朋友</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/personal" activeClassName="selected">
                            <svg className="svg-icon" aria-hidden="true">
                                <use xlinkHref="#icon-people_fill"></use>
                            </svg>
                            <span>我的</span>
                        </NavLink>
                    </li>
                </ul>
            </article>
        )
    }
}