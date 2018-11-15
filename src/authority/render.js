/**
 * @author Lnden
 * @date 2018/11/14
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */


import React, { Component } from 'react'


function UserGreeting(){
    return <h1>Welcome Back!</h1>
}

function GusetGreeting(){
    return <h1>Please sign ip.</h1>
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn){
        return <UserGreeting />
    }else{
        return  <GusetGreeting />
    }
}


class Render extends Component {
    render(){
        return (
            <Greeting  isLoggedIn={true}/>
        )
    }
}








function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            Logut
        </button>
    )
}


class LoginController extends Component {
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }
    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }else{
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}





function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {
                unreadMessages.length>0 &&
                    <h2>
                        You have {unreadMessages.length} unread messages.
                    </h2>
            }
        </div>
    )
}
const messages = ['React','Re:React','Re:Re:React'];

class Mailboxs extends Component {
    render(){
        return (
            <Mailbox unreadMessages={messages} />
        )
    }
}




function WarningBanner(props){
    if(!props.warn){
        return null
    }
    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends Component {
    constructor(props){
        super(props)
        this.state = { showWarning:true }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState(state=>({
            showWarning:!state.showWarning
        }))
    }

    render(){
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide':'Show'}
                </button>
            </div>
        )
    }
}



// export default Render
// export default LoginController
// export default Mailboxs
export default Page