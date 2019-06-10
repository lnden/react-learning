import React, { Component } from 'react'
import { createStore } from 'redux'



const action = {
    type: 'ADD_COUNT',
    payload: 'cumulative sum'
}

const defaultState = 0;
const reducer = (state = defaultState,action) => {
    console.log(action.type)
    switch(action.type) {
        case 'ADD_COUNT':
            return state + 1;
        default:
            return state
    }
}


const store = createStore(reducer);

console.log(store,11)





store.subscribe(reducer);







//  主函数App
class App extends Component {
    render() {
        return (
            <section>
                <h3>Redux原始应用</h3>
                <p>本文件主要负责写一个简单的redux跨组件点击累加</p>
                <Button />
                <Viewnum />
            </section>
        )
    }
}


//  按钮Button函数
class Button extends Component {

    handleClick = () => {
        store.dispatch({type: 'ADD_COUNT'})
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

    render() {
        return (
            <section>
                <b>视图层展示COUNT：{this.state.count}</b>
            </section>
        )
    }
}
export default App