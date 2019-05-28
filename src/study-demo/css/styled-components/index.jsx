import  React, { Component } from 'react'

import styled from 'styled-components'

const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    color: red
`

const Wrapper = styled.section`
    padding: 40px;
    background: white;
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