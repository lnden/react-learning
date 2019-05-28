import React,{ Component } from 'react'
import './index.scss'

class App extends Component {
    render() {
        return (
            <section>
                <h3>我是样式表页面</h3>
                <main>
                    <p>我是正文部分内容</p>
                    <button className="button">按钮</button>
                </main>
            </section>
        )
    }
}

export default App