import  React, { Component } from 'react'

import { Wrapper,Title,MainInner,Item,Button,TomatoButton,Thing,Input,Rotate } from './styles.js'


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
                    <ul>
                        <li>这是一条普通的Li</li>
                        <Item underline>这条记录有一天下划线 </Item>
                    </ul>
                </MainInner>
                <main>
                    <Button>被继承按钮的样式</Button>  
                    <TomatoButton>继承按钮的样式</TomatoButton>
                    <Thing>Hello,world</Thing>   
                    <div>
                        <Input placeholder="A small text input" size="1em" type="text"/>
                        <br />
                        <Input placeholder="A bigger text input" size="1em" />
                    </div>
                    <Rotate>&lt; 💅 &gt;</Rotate>
                </main>
            </section>
        )
    }
}

export default App