/**
 * @author Lnden
 * @date 2018/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react'
import './index.css'

const ThemeContext = React.createContext({
    theme: 'dark',
    toggle: () => {}, //向上下文设定一个回调方法
});

const themes = {
    light:{
        color:'#ffffff',
        background:'#222222'
    },
    dark:{
        color:'#000000',
        background:'#eeeeee'
    }
};


export default class App extends Component {
    constructor(){
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            theme:themes.light,
            toggle:this.toggle
        }
    }

    toggle(){
        this.setState(state => ({
            theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
        }));
    }


    render(){
        return (
            <ThemeContext.Provider value={this.state}>
                <MainContent></MainContent>
            </ThemeContext.Provider>
        )
    }
}

const MainContent = () =>
    <section>
        <PublicHeader />
    </section>

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
                ({theme,toggle}) => {
                    console.log(theme)
                    return (
                        <button style={theme} onClick={toggle}>MainContent => PublicHeader => Button</button>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}

class ChangeButton extends Component{
    render(){
        return (
            <ThemeContext.Consumer>
                {
                    ({toggle}) => {
                        return (
                            <button onClick={toggle}>修改搜索按钮颜色</button>
                        )
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}