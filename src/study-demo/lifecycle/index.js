import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'Lucy',
            flag:true
        }
        console.log('%c constructor初始化执行','color:#f00')
        this.handleClick = this.handleClick.bind(this)
        this.handleClickDestroy = this.handleClickDestroy.bind(this)
    }

    componentDidMount() {
        console.log('%c componentDidMount安装执行','color:#00bcd4')
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log('%c shouldComponentUpdate开始','color:#cddc39')
        console.log(nextProps,1)
        console.log(nextState,2)
        console.log('%c shouldComponentUpdate结束','color:#cddc39')
        return false
    }

    componentDidUpdate() {
        console.log('%c componentDidUpdate更新执行','color:#ff9800')
    }

    handleClick() {
        this.setState({
            name: 'Tom'
        })
    }

    handleClickDestroy(event) {
        this.setState({
            flag: !this.state.flag
        })
    }

    render() {
        console.log('%c render渲染执行','background:#ccc;color:#000')
        const STATUS = this.state.flag
        return (
            <section>
                <h1>生命周期</h1>
                <button onClick={this.handleClick}>更新事件</button>
                <p>{this.state.name}</p>
                {
                    STATUS ?
                        <Button handleClickDestroy={this.handleClickDestroy} />
                        :
                        ''

                }

            </section>
        )
    }
}


class Button extends Component {

    componentWillUnmount() {
        console.log('%c componentWillUnmount组件卸载执行','background:#a00;color:#aaaaaa')
    }
    render() {
        return (
            <button onClick={this.props.handleClickDestroy}>销毁组件</button>
        )
    }
}
export default App