import React, { Component } from 'react'


/**
 *  儿子组件向父亲组件传值展示
 */

class Father extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'lucy'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(param) {
        this.setState({
            name: param
        })
    }
    render() {
        return (
            <section>
                <div>我是父组件</div>
                <p>姓名：{this.state.name}</p>
                <Son handleClick={this.handleClick}/>
            </section>
        )
    }
}

class Son extends Component {
    render() {
        return (
            <section>
                <div>我是儿子组件，我要向父组件传递信息展示</div>
                <button onClick={()=>this.props.handleClick('Tom')}>传值按钮</button>
            </section>
        )
    }
}


/**
 *  孙子组件向爷爷组件传值展示
 */

class Grandson extends Component {
    render() {
        return (
            <section>
                <div>我是孙子组件</div>
                <div style={{border: '1px solid red',margin: '10px'}}>{this.props.name}：
                    <select onChange={this.props.handleSelect}>
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </div>
            </section>
        )
    }
}

class Child extends Component {
    render() {
        return (
            <section>
                <div>我是儿子组件</div>
                <div style={{border: "1px solid green",margin: "10px"}}>{this.props.name}：
                    <input onChange={this.props.handleChange}/>
                    <Grandson name="性别" handleSelect={this.props.handleSelect}/>
                </div>
            </section>
        )
    }
}

class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            sex: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleSelect(event) {
        this.setState({
            sex: event.target.value
        })
    }

    render() {
        return (
            <section>
                <div>我是父亲组件</div>
                <div style={{border: "1px solid #000",padding: "10px"}}>
                    <div>用户姓名：{this.state.username}</div>
                    <div>用户性别：{this.state.sex}</div>
                    <Child name="姓名" handleChange={this.handleChange} handleSelect={this.handleSelect} />
                </div>
            </section>
        )
    }
}

// export default Father
export default Parent