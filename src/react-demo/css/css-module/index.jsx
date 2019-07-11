
import React, { Component } from 'react'
import styles from './container.module.scss'
import { title } from './container.module.scss'
/**
 *  css-module使用的方式
 *      1、局部作用域使用   className={styles.title}
 *      2、全局作用域使用   className="title"
 *      3、class组合继承    composes: className[publicFont]
 *      4、输入其他模块     composes: publicColor from './public.css'
 *      5、输入变量         
 *              @value primary: #409eff; 
 *              @value colors: "./variable.css";
 *              @value primary[, success]  from colors;
 * 
 * 
 */


class App extends Component {
    render() {
        return(
            <section>
                <h1>我是css-module</h1>
                <p className={styles.title}>我是局部作用域 className={styles.title}</p>
                <p className={title}>我是局部作用域,简写方式 className={title}</p>
                <p className="title">我是全局作用域 className="title" 引入文件直接使用</p>
                <p className={styles.subtitle}>我是组合 继承使用的类名 className={styles.subtitle}</p>
                <p className={styles.importModule}>我是引用模块的方式 className={styles.importModule}</p>
                <p className={styles.variable}>我是使用的变量方式 classNmae={styles.variable}</p>
                <button className={styles.primaryBtn}>主要按钮</button>
                <button className={styles.successBtn}>成功按钮</button>
                <button className={styles.infoBtn}>信息按钮</button>
                <button className={styles.warningBtn}>警告按钮</button>
                <button className={styles.dangerBtn}>危险按钮</button>
            </section>
        )
    }
}

export default App