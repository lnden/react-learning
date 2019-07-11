import React, { useState,useEffect } from 'react'

function App() {
    const [ count,setCount ] = useState(0);

    useEffect(()=>{
        document.title = `You clicked ${count} times`
        
        return ()=>{
            console.log('返回一个函数，这是effect可选的清除机制，每个effect都可以返回一个清除函数')
        }
    })

    return (
        <section>
            <h3>我使用的是HOOK组件</h3>
            <main>
                <p>You clicked {count} times</p>
                <button onClick={()=>setCount(count+1)}>
                    Click Me
                </button>
            </main>
        </section>
    )
}

export default App