/**
 * @author Lnden
 * @date 2018/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React from 'react'
import { ThemeContext } from './theme-context'

function ThemedButton(props){
    return (
        <ThemeContext.Consumer>
            {
                theme => {
                    console.log(theme,1111111111111)
                    return (
                        <button {...props} style={{backgroundColor:theme.background}}>我是Themed-button</button>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}

export default ThemedButton;