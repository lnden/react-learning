import React, { Component } from 'react'
import { createStore } from 'redux'


//  Action动作
const action = {
    type: 'ADD_COUNT',
    payload: 'cumulative sum'
}

const defaultState = 0;
const reducer = (state = defaultState,action) => {
    switch(action.type) {
        case 'ADD_COUNT':
            console.log(action.type,666)
            return state + 1;
        default:
            return state
    }
}


const store = createStore(reducer);



//  主函数App
class App extends Component {
    render() {
        return (
            <section>
                <h3>Redux 原始应用</h3>
                <p>本文件主要负责写一个简单的redux跨组件点击累加</p>
                <Button />
                <Viewnum />
                <h3>Redux 浅析</h3>
                <p>1、web 应用是一个状态机，试图与状态是一一对应的</p>
                <p>2、所有的状态，保存在一个对象里面</p>

                <h4>Store：</h4>
                <p>store就是保存数据的地方，你可以把它看成一个容器。整个应用只有一个Store ！</p>
                <code dangerouslySetInnerHTML={{__html:`import { createStore } from "redux"`}}></code><br/>
                <code>const store = createStore(fn)</code>

                <h4>State：</h4>
                <p>store对象包含所有数据。如果想得到某个时点的数据，就要对store生成快照。这种时点的数据集合，就叫做State。</p>
                <p>当前时刻的state，可以通过store.getState()拿到。</p>
                <code dangerouslySetInnerHTML={{__html:`import { createStore } from "redux"`}}></code><br/>
                <code>const store = createStore(fn)</code><br/>
                <code>const state = store.getState()</code>

                <h4>Action：</h4>
                <p>State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。</p>                <p></p>
                <code dangerouslySetInnerHTML={{__html:`const action = {`}}></code><br/>
                <code>&emsp;&emsp;type: "ADD_COUNT",</code><br/>
                <code>&nbsp;&nbsp;payload: "learn redux"</code><br/>
                <code dangerouslySetInnerHTML={{__html: `};`}}></code>

                <h4>store.dispatch()</h4>
                <p>store.dispatch() 是View发出Action的唯一方法</p>
                <code dangerouslySetInnerHTML={{__html: `import { createStore } from "redux"`}}></code><br/>
                <code>const store = createStore(fn)</code><br/>
                <code dangerouslySetInnerHTML={{__html: `store.dispatch(action)`}}></code>
            </section>
        )
    }
}


//  按钮Button函数
class Button extends Component {
    handleClick = () => {
        store.dispatch(action)
    }

    render() {
        return (
            <section>
                <button onClick={this.handleClick}>点击按钮</button>
            </section>
        )
    }
}


//  展示数字函数
class Viewnum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: store.getState()
        }
    }

    componentDidMount(){
        store.subscribe(() =>
            this.setState({
                count:store.getState()
            })
        );
    }

    render() {
        return (
            <section>
                <b>视图层展示COUNT：{this.state.count}</b>
            </section>
        )
    }
}
export default App