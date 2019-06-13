import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider,connect } from 'react-redux'


class Counter extends Component {
    render() {
        const { value,onIncreaseClick } = this.props
        return (
            <section>
                <button onClick={onIncreaseClick}>Increase</button>
                初始化数值：<span>{value}</span>
            </section>
        )
    }
}

const increaseAction = {
    type: 'increase'
}

const defaultState = {
    count: 0
}
const reducer = (state = defaultState,action) => {
    const count = state.count
    switch(action.type){
        case 'increase':
            return { count: count+1 }
        default:
            return state
    }
}

const store = createStore(reducer)

function mapStateToProps(state) {
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)


class Container extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
export default Container




/**
 *  react-redux浅析
 *      1、connect()
 *      2、mapStateToProps()
 *      3、mapDispatchToProps()
 *      4、<Provider></Provider>
 */