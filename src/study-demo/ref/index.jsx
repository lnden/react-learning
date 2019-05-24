import React , { Component } from 'react'

/**
 *  React ref的三种用法
 *      1、字符串方式 [已经废弃]
 *      2、回调函数方式
 *      3、React.createRef() [React16.3提供] 
 * 
 */


 // 1、字符串方式

 // 2、回调函数方式
//子组件（通过forwardRef方法创建）
const Son = React.forwardRef((props,ref)=>(
    <input ref={ref} />
));

//父组件
class Father extends React.Component{
    constructor(props) {
        super(props);
        this.myRef=React.createRef();
    }
    componentDidMount() {
        console.log(this.myRef.current);
    }
    render() {
        return (
            <section>
                <Son ref={this.myRef}/>
            </section>
        )
    }
}

 // 3、React.createRef()
 class Child extends Component {
     constructor(props) {
         super(props)
         this.state = {
             value: ''
         }
         this.myRef = React.createRef()
         this.handleChange = this.handleChange.bind(this)
     }
     componentDidMount() {
         this.myRef.current.focus()   // 知识点
     }

     handleChange(){
        this.setState({value: this.myRef.current.value})
     }

     render() {
         return (
             <section>
                 <input ref={this.myRef} onChange={this.handleChange}/>
                 <p>展示input输入框内的内容：{this.state.value}</p>
             </section>
         )
     }
 }

 export default Father