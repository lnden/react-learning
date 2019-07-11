import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <section>
                <input type="text" value={this.state.value} onChange={this.handleChange} />  
            </section>
        )
    }
}

export default Input