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
                        return <li><p>{value}</p></li>
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
    <div>Hhello, {formatName(user)} !</div>


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
            </section>
        )
    }
}
export default App