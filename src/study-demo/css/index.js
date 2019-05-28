import React, { Component } from 'react'
import './index.css'
import classnames from 'classnames'
import './base.scss'
import styles from './container.module.scss'


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
                    <hr/>
                    <Container />
                    <hr/>
                    <Module />
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
class MultipleClass extends Component {
    render() {
        let btnClass = classnames({
            btn:true,
            'btn-pressed': true,
            'btn-cover': true
        })
        // let btnClass = classnames('btn', 'btn-pressed','btn-cover')

        return (
            <section>
                <h1>使用classnames</h1>
                <button className={btnClass}>测试样式</button>
            </section>
        )
    }
}

// 5.使用scss进行样式编辑
class Container extends Component {
    render() {
        return (
            <section>
                <p className="title">撒大声地啥多
                    <span className="test">测测额</span>
                </p>
            </section>
        )
    }
}

// 6.使用模块化样式

class Module extends Component {
    render() {
        return (
            <section>
                <p className={styles.title}>测试啥哎啥</p>
            </section>
        )
    }
}

/**
 *  讨论React组件引用样式的几种方式
 *      1、使用行内样式
 *      2、使用行内样式对象
 *      2、使用class样式
 */