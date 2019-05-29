import  React, { Component } from 'react'
import styled from 'styled-components'


const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    color: red;
    border:1px solid #f00;
`

const Wrapper = styled.section`
    padding: 40px;
    background: white;
    border:1px solid #090;
`

const MainInner = styled.main`
    border: 1px solid #f00;
    margin: 20px;
    h1{
        border: 2px solid #f00;
        margin: 20px;
    }
    .context {
        color: #f00;
    }
`

class App extends Component {
    render() {
        return (
            <section>
                <Wrapper>
                    <Title>Hello World, this is my first styled component!</Title>
                </Wrapper>
                <MainInner>
                    <h1>我是标题H1，styled-components使用的另一种方式</h1>
                    <p className="context">test数据答案啥啥所</p>
                </MainInner>
            </section>
        )
    }
}

export default App