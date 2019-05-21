import React, { Component } from 'react'

const title = {
    color:'#f00'
}

// jsx内设循环map
const list = ['语文', '数学', '英语', '历史', '地理']
const Element = () => {
    return (
        <section>
            <p style={title}>jsx内设循环map</p>
            <ul>
                {
                    list.map((value,index)=>{
                        return <li data-attr={index} key={index}><p>{value}</p></li>
                    })
                }
            </ul>
        </section>
    )
}


// jsx内设变量
const Button = <button>jsx内设变量</button>
const Variable = () => {
    return (
        <section>
            <p style={title} >jsx变量方式展示</p>
            {Button}
        </section>
    )
}

// jsx判断变量
const whetherAdult = false
const Judge = () => {
    return (
        <section>
            <p style={title}>jsx判断变量</p>
            <p>{ whetherAdult? '为true存在': '为false不存在' }</p>
        </section>
    )
}

// jsx使用函数
function formatName(user) {
    const { firstName,lastName } = user;
    return firstName + ' ' + lastName
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
}

const Func = () =>
    <section>
        <p style={title}>jsx使用函数</p>
        <p>Hhello, {formatName(user)} !</p>
    </section>


// 使用Boolean属性
const Disabled = () => {
    return (
        <section>
            <p style={title}>使用Boolean属性简写方式</p>
            <input type="button" value="按钮" disabled />
            <input type="button" value="按钮" disabled={true} />
            <input type="button" value="按钮" />
            <input type="button" value="按钮" disabled={false} />
        </section>
    )
}

// 添加注释信息
const personal = {
    name: 'Tom',
    age: 18,
    address: 'Beijing'
}
const Comment = () => {
    const { name,age,address } = personal
    return (
        <nav>
            <p style={title}>添加多行备注and单行备注</p>
            <p>
                {/*
                    name +
                    age +
                    address
                */}
                {
                    name //asasas
                }
            </p>
        </nav>
    )
}


// 不使用jsx使用语法糖
class Hello extends Component {
    render() {
        return <div>Hello, {this.props.toWhat}</div>
    }
}

class Hellos extends Component {
    render() {
        return React.createElement('div',null,`Hellos ${this.props.toWhat}`)
    }
}

class App extends Component {
    render() {
        return (
            <section>
                <Element />
                <hr/>
                <Variable />
                <hr/>
                <Judge />
                <hr/>
                <Func />
                <hr/>
                <Disabled />
                <hr/>
                <Comment />
                <hr />
                <Hello toWhat="Tom"/>
                <hr/>
                <Hellos toWhat="Lucy"/>
            </section>
        )
    }
}
export default App