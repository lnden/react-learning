import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'


function POST(type,payload = 'test redux-promise'){
    return {
        type, 
        payload
    }
}

let defaultStatus = '详情';

const reducer = (state = defaultStatus,action) => {
    switch(action.type){
        case 'POST_START':
            return state + '：dispatch开始、'
        case 'POST_SUCCESS':
            return state + '：dispatch成功、'
        case 'POST_FAILURE':
            return state + '：dispatch失败、'
        default:
            return state
    }
}
const store = createStore(reducer,applyMiddleware(promiseMiddleware))

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


const FetchPosts = (dispatch,url) => new Promise((resolve,reject)=>{
    dispatch(
        POST('POST_START','start')
    )
    return fetch(url)
            .then(response=>{
                console.log('第一次请求request：',response)
                return response.json()
            })
            .then(json=>{
                console.log('第二次处理.json()：',json)
                return dispatch(
                    POST('POST_SUCCESS',json)
                )
            })
            .then(error=>{
                console.log('第三次截取错误：',error)
                return dispatch(
                      POST('POST_FAILURE','failure')
                )
            })
            .then(data=>{
                console.log('第四次请求、五次ing：',data)
                resolve(data)
            })
            .catch((err)=>{
                console.log('报错信息：',err)
            })
})

class Button extends Component {
    handleClick = () => {
        const { dispatch } = store
        const url = "https://hn.algolia.com/api/v1/search?query=react&page=0&hitsPerPage=50";
        store.dispatch(FetchPosts(dispatch,url)).then(res=>{
            console.log(res,store.getState())
        }).then(res=>{
            console.log(22)
        })
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