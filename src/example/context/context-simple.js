/**
 * @author Lnden
 * @date 2018/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react'
import './index.css'

const ThemeContext = React.createContext('light');

export default class App extends Component {
    render(){
        return (
            <ThemeContext.Provider value="dark">
                <MainContent></MainContent>
            </ThemeContext.Provider>
        )
    }
}

const MainContent = () =>
    <section>
        <PublicHeader />
    </section>;

function PublicHeader(){
    return (
        <section>
            <Search />
        </section>
    )
}

function Search(){
    return (
        <section>
            <input type="text" placeholder="搜索内容"/>
            <Button />
            <br/>
            <ChangeButton />
        </section>
    )
}

function Button(){
    return (
        <ThemeContext.Consumer>
            {
                theme => {
                    return (
                        <button className={theme}>MainContent => PublicHeader => Button</button>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}

class ChangeButton extends Component{
    constructor(){
        super();
        this.handlerChange = this.handlerChange.bind(this);
    }

    handlerChange(){
        console.log("%c%c准备重新分发context %c请查看context-","line-height:28px;","color:#f00","color:#090")
    }

    render(){
        return (
            <button className="changebtn" onClick={this.handlerChange}>修改搜索按钮颜色</button>
        )
    }
}