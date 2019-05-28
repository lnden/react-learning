
import React, { Component } from 'react'
import styles from './container.module.scss'

class App extends Component {
    render() {
        return(
            <section>
                <h1>我是css-module</h1>
                <p  className={styles.title}>内容部分</p>
            </section>
        )
    }
}

export default App