/**
 * @author Lnden
 * @date 2018/12/24
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */
import React,{ Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
        this.incrementAsync = this.incrementAsync.bind(this);
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }

    render(){
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <section>
                <p>Clicked: {value} times</p>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <button onClick={this.incrementIfOdd}>Increment if odd</button>
                <button onClick={this.incrementAsync}>Increment async</button>
            </section>
        )
    }
}

export default Counter;