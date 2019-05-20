import React, { Component } from 'react'
import './index.css'
import classNames from 'classnames'
import styles from './style'


export default class App extends Component {
    render() {
        return (
            <section>
                <h3>React样式引用</h3>
                <main>
                    <p>我是正文内容~</p>
                    <Styles />
                    <hr/>
                    <StyleModule />
                    <hr/>
                    <ClassName />
                    <hr/>
                    <MultipleClass />
                </main>
            </section>
        )
    }
}



// 1、使用行内样式绑定
const Styles = () =>
    <section>
        <article style={{width: '200px',height: '200px','border': '1px solid #f00',marginLeft:'20px'}}>
            我是行内样式
        </article>
    </section>



// 2、使用行内样式对象方式绑定
let articleStyle = {
    backgroundColor: '#080',
    color: '#f00',
    fontSize: 40
};
const StyleModule = () =>
    <section>
        <article style={articleStyle}>
            style使用对象的方式
        </article>
    </section>



// 3、使用class类名样式绑定
const ClassName = () =>
    <section>
        <article className="class-name">
            class的方式，使用的时候使用className == class
        </article>
    </section>



// 4、使用class类名绑定多个class
const MultipleClass = () =>
    <section>
        {/*<article className={`${styles.myStyle} ${value.n}`}>*/}
            {/*多个class同时绑定，这个使用需要使用classnames插件*/}
        {/*</article>*/}
        <article style={styles.myStyle}>
            style 使用引入对象方式
        </article>
    </section>


/**
 *  讨论React组件引用样式的几种方式
 *      1、使用行内样式
 *      2、使用行内样式对象
 *      2、使用class样式
 */