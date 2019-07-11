import React, { Component } from 'react'

class Mouse extends Component {
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
        const { x, y } = this.state
        return (
            <section style={{height:'400px',border:'1px solid #f00'}} onMouseMove={this.handleMouseMove}>
                <p>当前的鼠标位置是：({x},{y})</p>
            </section>
        )
    }
}

class MouseTracker extends Component {
    render() {
        return (
            <div>
                <h1>移动鼠标！</h1>
                <Mouse />
            </div>
        )
    }
}
export default MouseTracker