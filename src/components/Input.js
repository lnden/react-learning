/**
 * Create By DingLindong on 2018/3/29
 */
import React from 'react'

class Input extends React.Component{
    render(){
        return <div>
            <input  type="text" value={this.props.text} />
        </div>
    }
}

export default Input