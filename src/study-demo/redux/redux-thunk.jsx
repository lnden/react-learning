import React, { Component } from 'react'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


function POSTBOX(type, payload = 'test redux-thunk') {
    return {
        type, 
        payload
    }
}

const defaultStatus = '详情';
const reducer = (state = defaultStatus,action) => {
    switch(action.type) {
        case 'FETCH_INIT':
            return  state + ':初始化、'
        case 'FETCH_FRIENDS':
            return state + '：dispatch开始、'
        case 'RECEIVE_FRIENDS':
            return state + '：dispatch成功、'
        case 'RECEIVE_LAST_SECOND':
            return state + '：dispatch倒数第二次'
        case 'RECEIVE_FAILURE':
            return state + '：dispatch失败'
        default:
            return state
    }
}
const store = createStore(reducer,applyMiddleware(thunk))

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


function fetchFriends() {
    return dispatch => {
        console.log('第零次初始化：')
        dispatch(
            POSTBOX( 'FETCH_INIT','init')
        )
        const url = "https://hn.algolia.com/api/v1/search?query=react&page=0&hitsPerPage=50";
        return fetch(url)
                .then(response => {
                    console.log('第一次请求request：',response)
                    return response.json()
                })
                .then(json => {
                    console.log('第二次处理.json()：',json)
                    return dispatch(
                        POSTBOX('RECEIVE_FRIENDS',json)
                    )
                })
                .then(data=>{
                    console.log('第三次截取错误：',data)
                    return dispatch(
                        POSTBOX('RECEIVE_LAST_SECOND','last-seconed')
                    )
                })
                .then(data=>{
                    console.log('第四次请求、五次ing：',data)
                })
                .catch(err => {
                    console.log(err)
                    return dispatch(
                        POSTBOX('RECEIVE_FAILURE','failure')
                    )
                })
    }
}

class Button extends Component {
    handleClick = () => {
        store.dispatch(fetchFriends()).then(res=>{
            console.log(11)  
        }).then(res=>{
            console.log(22)
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