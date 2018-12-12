/**
 * @author Lnden
 * @date 2018/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react'
import './demo.css'

const ThemeContext = React.createContext('light');


class App extends Component {
    render(){
        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}

function Toolbar(props){
    return (
        <div>
            <ThemedButton />
        </div>
    )
}
function Button(props) {
    return (
        <section>
            <button className={props.theme}>测试</button>
        </section>
    )
}

function ThemedButton(props){
    return (
        <ThemeContext.Consumer>
            {
                theme => {
                    console.log("%c%c企鹅号码%c1273727577","line-height:28px;","background:#222;color:#fff","color:#008000");
                    return (
                        <Button theme={theme}/>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}

export default App