import React,{ Component } from 'react'
import PropTypes from 'prop-types'

class Greeting extends Component {
    render() {
        return (
            <section>
                <h1>Hello, {this.props.name}</h1>
            </section>
        )
    }
}

Greeting.propTypes = {
    name: PropTypes.string,
    name: PropTypes.bool,
    name: PropTypes.func,
    name: PropTypes.number,
    name: PropTypes.object,
    name: PropTypes.array,
    name: PropTypes.symbol,

    // 任何可被渲染的元素（包括数字、字符串、元素或数组）
    name: PropTypes.node,

    // 一个React元素
    name: PropTypes.element,

    // 可以让你的props只能是特定的值，枚举类型
    name: PropTypes.oneOf(['News','Photos']),

    // 一个对象可以是几种类型中的任意一个类型
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        // PropTypes.instanceOf(Message)
        // ...,
        // 详情内容访问https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html
    ]),

    name: PropTypes.string,

  };

const App = () =>
    <section>
        <Greeting name={'lily'}/>
    </section>


export default App;