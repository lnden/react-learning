
import React, { Component } from 'react'
import { createStore   } from 'redux'

const action = {
    type: 'ADD_COUNT',
    payload: 'add number'
}
const defaultStatus = 0;
const reducer = (state = defaultStatus,action) => {
    switch(action.type) {
        case 'ADD_COUNT':
            return state + 1
        default:
            return state
    }
}
const store = createStore(reducer)

class App extends Component {
    render() {
        return (
            <section>
                <h1>React-thunk浅析</h1>
                <Button />
                <Viewbox />
            </section>
        )
    }
}

class Button extends Component {

    handleClick = (dispatch,getState) => {
        fetch('http://localhost:1234/api/test/user/users').then(res => {
            return res.json();
        })
        .then(data => {
            console.log(111)
            // store.dispatch(action)
        })
        .catch(e => {
            console.log(e)
            store.dispatch(action)
        })

    }

    render() {
        return (
            <section>
                <button onClick={this.handleClick}>测试按钮</button>
            </section>
        )
    }
}

class Viewbox extends Component {

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
                <p>我应该是纯展示的数值：{this.state.count}</p>
            </section>
        )
    }
}
export default App