/**
 * Create By DingLindong on 2018/3/29
 */
import React from 'react'

class Event extends React.Component{
    handeClick(event){
        console.log(event.target.innerHTML);
        console.log(this);
    }
    render(){
        return <div>
            <h3 onClick={this.handeClick.bind(this)}>我是事件组件@</h3>
        </div>
    }
}

export default Event