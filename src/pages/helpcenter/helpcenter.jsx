import React, { Component } from 'react'
import PublicHeader from '@/components/header/index.jsx'
import './helpcenter.less'


class HelpCenter extends Component {
    render() {
        return (
            <main>
                <PublicHeader title="帮助中心" record />
                <article className="context-con">
                    <h2>介绍</h2>
                    <p>本项目主要用于理解 react 和 redux 的编译方式，以及 react + redux 之间的配合方式</p>
                    <h2>技术栈</h2>
                    <p>react：^16.8.6</p>
                    <p>redux：^4.0.1</p>
                    <p>webpack: 4.29.6</p>
                    <p>react-router-dom：^5.0.0</p>
                    <p>ES6 /7/8/9</p>
                    <p>axios：^0.19.0</p>
                    <p>less：^3.9.0</p>
                </article>
            </main>
        )
    }
}

export default HelpCenter