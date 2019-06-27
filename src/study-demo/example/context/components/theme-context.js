/**
 * @author Lnden
 * @date 2018/12/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React from 'react'

export const themes = {
    light:{
        foreground:'#ffffff',
        background:'#222222'
    },
    dark:{
        foreground:'#000000',
        background:'#eeeeee'
    }
};

export const ThemeContext = React.createContext(
    themes.dark
)