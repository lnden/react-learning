import React, { Component } from 'react'
import { applyMiddleware,createStore } from 'redux'
import logger from 'redux-logger'


const action = {
    type: 'ADD_COUNT',
    payload: 'add'
}
const defaultStatus = 0
const reducer = (state = defaultStatus,action) => {
    switch (action.type) {
        case 'ADD_COUNT':
            return state + 1
        default:
            return state
    }
}

const store = createStore(reducer,applyMiddleware(logger))

class App extends Component {
    render() {
        return (
            <section>
                <h3>我是Redux test</h3>
                <Button/>
                <Viewsum/>
            </section>
        )
    }
}


//  按钮
class Button extends Component {

    handleClick = () => {
        console.log(1)
        store.dispatch(action)
    }

    render() {
        return (
            <section>
                <button onClick={this.handleClick}>自增按钮</button>
            </section>
        )
    }
}


//  视图
class Viewsum extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: store.getState()
        }
    }

    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                count: store.getState()
            })
        })
    }

    render() {
        return (
            <section>
                <p>自增的redux用法已经写好：{this.state.count}</p>
            </section>
        )
    }
}

export default App;


/**
 * 
 *  1.web应用是一个状态，视图和状态是一一对应的
 *  2.所有的状态，保存在一个对象里面
 */