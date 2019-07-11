import React, { Component } from 'react'
import './index.scss'

class App extends Component {
    render() {
        return (
            <section>
                <h3>我是SCSS样式的引用</h3>
                <main className="container">
                    <p className="context">我是主要内容区域</p>
                </main>
            </section>
        )
    }
}

export default App