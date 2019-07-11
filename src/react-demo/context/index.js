import React, { Component } from 'react'
import './index.css'

/**
 *  层层传递props值的演示
 */

class App extends Component {
    render() {
        return <Toolbar theme="green" />
    }
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton theme={props.theme}/>
        </div>
    )
}

class ThemedButton extends Component {
    render() {
        return <Button theme={this.props.theme}/>
    }
}

const Button = (props) => {
    return (
        <section>
            <button className={props.theme}>测试按钮</button>
            <br/>
            <p>注释：按钮的颜色是通过四个组件层层传递props接受的</p>
        </section>
    )
}
export default App