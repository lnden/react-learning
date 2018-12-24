/**
 * @author Lnden
 * @date 2018/12/20
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React,{ Component } from 'react'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const  store  = createStore(counter);

class App extends Component {
    constructor(){
        super();
        this.state = {
            count:store.getState()
        }
    }
    componentWillMount(){

        store.subscribe(()=>{
            this.setState({
                count:store.getState()
            })
        })
    }
    render(){
        return (
            <section>
                <Counter
                    value={this.state.count}
                    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
                />
            </section>
        )
    }
}

export default App;