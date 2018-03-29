/**
 * Create By DingLindong on 2018/3/29
 */
import React from 'react'

class Input2 extends React.Component{
    handleChange(event) {
        this.setState({text: event.target.value})
    }
    render(){
        return <div>
            <input
                onChange={this.handleChange.bind(this)}
            />
        </div>
    }
}
export default Input2