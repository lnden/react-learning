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

class App extends Component {
    render() {
        return (
            <Wrapper>
                <Title>Hello World, this is my first styled component!</Title>
            </Wrapper>
        )
    }
}

export default App