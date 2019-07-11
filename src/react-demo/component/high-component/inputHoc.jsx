import React,{ Component } from 'react'
import hocComponent from './hocComponent.jsx'

class Input extends Component {
    render() {
        return (
            <section>
                <input type="text" {...this.props} placeholder="我是高阶组件调用"/>
            </section>
        )
    }
}

export default hocComponent(Input)