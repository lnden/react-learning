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


//  为DOM元素添加ref属性 -----------------------------------------------------
class CustomTextInput extends Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
        this.focusTextInput = this.focusTextInput.bind(this)
    }

    focusTextInput() {
        //console.log('父亲组件执行了该方法')
        this.textInput.current.focus()
    }
    
    render() {
        return (
            <section>
                <input type="text" ref={this.textInput}/>
                <br/>
                <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
            </section>
        )
    }
}


//  为class组件添加ref属性 -----------------------------------------------------
class  AutoFocusTextInput extends Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef();
    }

    componentDidMount() {
        //console.log(this.textInput.current)
        this.textInput.current.focusTextInput()
    }

    render() {
        return (
            <CustomTextInput ref={this.textInput}/>
        )
    }
}


//  ref与函数组件、不能在函数组件上使用ref属性！--------------------------------------------------
function MyFunctionComponent() {
    return <input />
}

class Parent extends Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
    }
    render() {
        //  This will *not* work!
        return (
            <section>
                <MyFunctionComponent ref={this.textInput} />
            </section>
        )
    }
}
// export default MyComponent
// export default CustomTextInput
export default AutoFocusTextInput