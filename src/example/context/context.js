/**
 * @author Lnden
 * @date 2018/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react'
import { ThemeContext,themes } from './components/theme-context';
import ThemedButton from './components/themed-button'


function Toolbar(props){
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    )
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            theme:themes.light
        };
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme(){
        this.setState((state)=>({
            theme:state.theme === themes.dark ? themes.light : themes.dark
        }))
    }

    render(){
        return (
            <section>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}/>
                </ThemeContext.Provider>
                <section>
                    <ThemedButton  onClick={this.toggleTheme}/>
                </section>
            </section>
        )
    }
}

export default App