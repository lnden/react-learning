import React, { Component } from 'react'
import './index.css'
// 使用context的具体步骤

// 1、创建一个 context 且设定默认值 [ 默认值执行条件是 是否存在ThemeContext.Provider ]
const ThemeContext = React.createContext('light');

class App extends Component {
    render() {
        return (
            // 2、使用一个 Provider 来将当前的 theme 传递给一下的组件树
            //    无论多深，任何组件都能读取到这个值
            //    我们将 drak 作为当前的值传递下去
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}

// 此时中间的住一间再也不必知名往下传递 theme 了
function Toolbar() {
    return (
        <section>
            <ThemeButtonOne />
            <br/>
            <ThemeButtonTwo />
            <br/>
            <ThemeButtonThree />
        </section>
    )
}

// 第一种方式
class ThemeButtonOne extends Component {
    render() {
        return <button className={this.context}>测试按钮</button>
    }
}
ThemeButtonOne.contextType = ThemeContext


// 第二种方式
class ThemeButtonTwo extends Component {
    // 3、指定 contextType 读取当前的 theme context
    //    React 会往上找到最近的 theme Provider 然后使用它的值
    //    在这个例子中， 当前 theme 值为 dark
    static contextType = ThemeContext;

    render() {
        return  <button className={this.context}>测试按钮</button>
    }
}


// 第三种方式
// 备注信息：还可以使用另外一种方式获取传递过来的 theme 值
class ThemeButtonThree extends Component {
    render() {
       return (
           <ThemeContext.Consumer>
               {
                   theme => {
                       return <button className={theme}>测试按钮 使用回调函数的方式</button>
                   }
               }
           </ThemeContext.Consumer>
       )
    }
}


export default App