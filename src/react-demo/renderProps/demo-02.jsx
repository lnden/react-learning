import React, { Component } from 'react'


class Cat extends Component {
    render() {
        const { x,y } = this.props
        return (
            <img src="/baidu_85beaf5496f291521eb75ba38eacbd87.svg" alt="cat" style={{ width:'40px',height:'40px',position: 'absolute',left:x,top:y }}/>
        )
    }
}

class MouseWithCat  extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.state = {
            x: 0,
            y: 0
        }
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        return (
            <section style={{height:'400px',border:'1px solid #f00'}} onMouseMove={this.handleMouseMove}>
                <Cat {...this.state}/>
            </section>
        )
    }
}

class MouseTracker extends Component {
    render() {
        return (
            <div>
                <h1>移动鼠标！</h1>
                <MouseWithCat />
            </div>
        )
    }
}
export default MouseTracker