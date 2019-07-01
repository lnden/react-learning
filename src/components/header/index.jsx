import React, { Component } from 'react'
import './demo.css'
// import './lnden.scss'
import './index.less'

export default class PublicHeader extends Component {
    render(){
        return (
            <header className="header-container">
                <span className="header-slide-icon icon-catalog" onClick={this.toggleNav}>11</span>
            </header>
        )
    }
}