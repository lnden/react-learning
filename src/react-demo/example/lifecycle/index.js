/**
 * @author Lnden
 * @date 2018/12/11
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react'


class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'lily',
            age:26,
            address:'黑龙江',
            count:1,
            nextName:props.name
        };
        this.handlerClick = this.handlerClick.bind(this);
        console.log('%c生命周期开始执行：constructor(组件初始化执行一次)','color:#0ff')
    }

    componentWillMount(){
        console.log('%c生命周期开始执行：componentWillMount(组件初始化时调用一次，在渲染render之前)','color:#ea6f5a')
    }
    componentDidMount(){
        console.log('%c生命周期开始执行：componentDidMount(组件渲染render之后调用一次，在渲染render之后)','color:#ea6f5a')
    }

    componentWillUnMount(){
        console.log('%c生命周期开始执行：componentWillUnMount(组件卸载时调用，可以清楚一些定时器)','background#000;color:#fff')
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            nextName:nextProps.name
        });
        // console.log(nextProps); //被更新的props内容
        console.log('%c生命周期开始执行：componentWillReceiveProps(组件初始化时不调用，组件接受新的props时调用)','background:#ff0;color:#f00')
    }


    shouldComponentUpdate(nextProps,nextState){
        // console.log('当前的props：',this.props,'更新获取props:',nextProps);
        // console.log('当前的state：',this.state,'更新获取state:',nextState);
        console.log('%c生命周期开始执行：shouldComponentUpdate(React优化重要环节，返回true/false)','background:#0f0;color:#a183cd');
        return true
        // return false
    }


    componentWillUpdate(){
        console.log('%c生命周期开始执行：componentWillUpdate(组件更新时候调用，在渲染render组件之前)','color:#3194d0')
    }
    componentDidUpdate(){
        console.log('%c生命周期开始执行：compoentDidUpDate(组件更新完成时调用该组件，在渲染render组件之后)','color:#3194d0')
    }



    handlerClick(){
        this.setState((state)=>({
            count:state.count+1
        }));

        // 调用父组件的方式并且传递Tom,触发父组件传递子组件的props变化，从而componentWillReceiveProps被触发！
        this.props.handleName('Tom')
    }
    render(){
        console.log('%c生命周期开始执行：render(渲染组件)','color:#42c02e');
        const num = this.state.count;
        return (
            <div>
                <h3>测试React生命周的页面</h3>
                <button onClick={this.handlerClick}>点击更新组件</button>
                <div>{num}</div>
                <h4>{this.state.nextName}</h4>
            </div>
        )
    }
}


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'lily'
        };
        this.handleName = this.handleName.bind(this);
    }

    handleName(event){
        this.setState({
            name:event
        })
    }

    render(){
        return (
            <section>
                <LifeCycle name={this.state.name} handleName={this.handleName}/>
            </section>
        )
    }
}
export default App