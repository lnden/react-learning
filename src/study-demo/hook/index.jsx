import React, { useState,useEffect } from 'react'



function  App() {
    const [count,setCount] = useState(1)

    useEffect(()=>{
        document.title = `You chicked ${count} times`
        return ()=>{
            console.log('返回函数销毁执行')
        }
    })

    return (
        <section>
            <p>You clicked { count } times</p>
            <button onClick={()=>setCount(count+1)}>
                Click Me
            </button>
        </section>
    )
}

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            status:true
        }
    }
    handleClick = () =>{
        this.setState({
            status:!this.state.status
        })
    }
    render(){
        return (
            <section>
                <button onClick={this.handleClick}>注销按钮</button>
                {
                    this.state.status ?  <App /> :''
                }
              
            </section>
        )
    }
}
export default Main