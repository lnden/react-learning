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

export default class Header extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const pagename = this.props.type
        return (
            <aside className="public-header">
                <figure className="al-indexHeaderItem">
                    <NavLink to="/" exact activeClassName="selected">《返回</NavLink>
                </figure>
                <figure className="al-indexHeaderItem">
                    <p>{pagename}</p>
                </figure>
                <figure className="al-indexHeaderItem">

                </figure>
            </aside>
        )
    }
}