import React, { Component } from 'react'
import { createStore } from 'redux'


const action = {
    type: 'ADD_COUNT',
    payload: 'add number'
}

let defaultStatus = 0;

const reducer = (state = defaultStatus,action) => {
    switch(action.type){
        case 'ADD_COUNT':
            return state + 1
        default:
            return state
    }
}
const store = createStore(reducer)

class App  extends Component {
    render() {
        return (
            <section>
                <h1>Redux-promise浅析</h1>
                <Button />
                <Viewbox />
            </section>
        )
    }
}

class Button extends Component {
    handleClick = () => {
        store.dispatch(action)
    }

    render() {
        return (
            <section>
                <button onClick={this.handleClick}>点击自增</button>
            </section>
        )
    }
}

class Viewbox extends Component {
    constructor(props) {
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
                <p>视图View展示为：{this.state.count}</p>
            </section>
        )
    }
}


export default App