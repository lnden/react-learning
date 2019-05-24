import React, { Component } from 'react'


// ref的工作流程
class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.myRef.current)
    }


    render() {
        return (
            <section>
                <div ref={this.myRef}>REF</div>
            </section>
        )
    }
}
export default MyComponent

class CustomTextInput extends Component {
    constructor() {

    }

    focusTextInput() {

    }
    
    render() {
        return (
            <section>
                <input type="text" ref={this.textInput}/>
                <br/>
                <input type="text"       />
            </section>
        )
    }
}