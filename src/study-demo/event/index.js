import React, { Component } from 'react'
import './index.css'

export default class Button extends Component {
    constructor() {
        super()
        this.handleWarnButton = this.handleWarnButton.bind(this);
    }

    handleCommonButton() {
        console.log(this)
    }

    handleSuccessButton() {
        console.log(this)
    }

    handleWarnButton() {
        console.log(this)
    }

    handleDangerButton = () => {
        console.log(this)
    }


    render() {
        return (
            <section className="container">
                <button className="warn" onClick={this.handleWarnButton}>警告按钮</button>
                <p>事件执行方式一：</p>
                <p>官方推荐方式，在构造函数内初始化进行绑定 <code>this.handleWarnButton = this.handleWarnButton.bind(this)</code></p>
                <p>在类构造函数中绑定this，调用的时候不需要再绑定</p>
                <p>优点：只会生成一个方法实例，并且绑定一次之后如果多次用到这个方法也不需要再绑定。</p>
                <p>缺点：即使不用到state，也需要添加类构造函数来绑定this，代码量多一点。</p>


                <button className="common" onClick={this.handleCommonButton.bind(this)}>普通按钮</button>
                <p>事件执行方式二：</p>
                <button className="success" onClick={()=>this.handleSuccessButton()}>成功按钮</button>
                <p>事件执行方式三：</p>
                <p>方式2和方式3都是在调用的时候再绑定this。</p>
                <p>优点：写法比较简单，当组件中没有state的时候就不需要添加类构造函数来绑定this</p>
                <p>缺点：每一次调用的时候都会生成一个新的方法实例，因此对性能有影响，并且当这个函数作为属性值传入低阶组件的时候，这些组件可能会进行额外的重新渲染，因为每一次都是新的方法实例作为的新的属性传递。</p>


                <button className="danger" onClick={this.handleDangerButton}>危险按钮</button>
                <p>事件执行方式四：</p>
                <p>最好的绑定方式，属于实验性的语法，需要结合babel转译 <code>handleDangerButton = () => {}</code></p>
                <p>利用属性初始化语法，将方法初始化为箭头函数，因此在创建函数的时候就绑定了this。</p>
                <p>缺点：目前仍然是实验性语法，需要用babel转译</p>
                <p>优点：创建方法就绑定this，不需要在类构造函数中绑定，调用的时候不需要再作绑定。结合了方式1、方式2、方式3的优点</p>
            </section>
        )
    }
}