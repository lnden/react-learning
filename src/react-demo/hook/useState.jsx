import React, { useState,useEffect } from 'react'

function App() {
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: '学习 Hook' }]);

    return (
        <section>
            <h3>我使用的是HOOK组件</h3>
            <main>
                下面我就可以使用自定义的State值
                <p>{age}</p>
                <p>{fruit}</p>
                {
                    todos.map((val)=>{
                        return <p>{val.text}</p>
                    })
                }
            </main>
        </section>
    )
}

export default App