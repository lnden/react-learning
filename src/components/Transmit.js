/**
 * Create By Ding on 2018/3/29
 */
import React from 'react'

class Transmit extends React.Component{
    render(){
        return <div>
            <h2>姓名：{this.props.name}</h2>
            <h2>年龄：{this.props.age}</h2>
        </div>
    }
}

export default Transmit