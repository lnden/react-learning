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

 // 3、React.createRef()
 class Child extends Component {
     constructor(props) {
         super(props)
         this.myRef = React.createRef()
     }
     componentDidMount() {
         console.log(this.myRef)
     }
     render() {
         return (
             <section>
                 <input type="text" ref="this.myRef" placeholder="模拟REF" />
             </section>
         )
     }
 }

 export default Child