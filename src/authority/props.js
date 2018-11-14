/**
 * @author Lnden
 * @date 2018/11/14
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */
import React, { Component } from 'react'

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    }
};


// function Comment(props){
//     return (
//         <div className="Comment">
//             <UserInfo user={props.author} />
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatData(props.date)}
//             </div>
//         </div>
//     )
// }
//
// function formatData(date) {
//     return date.toLocaleDateString();
// }
//
// function Avatar(props){
//     return (
//         <img
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//         />
//     )
// }
//
// function UserInfo(props){
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.user}/>
//             <div className="UserInfo-name">
//                 {props.user.name}
//             </div>
//         </div>
//     )
// }
//
// export default class App extends Component {
//     render(){
//         return (
//             <div>
//                 <Comment
//                     author={comment.author}
//                     text={comment.text}
//                     date={comment.date}
//                 />
//             </div>
//
//         )
//     }
// }


//可以使用ES6结构赋值编写
function Comment(props){
    return (
        <div className="Comment">
            <UserInfo {...props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatData(props.date)}
            </div>
        </div>
    )
}

function formatData(date) {
    return date.toLocaleDateString();
}

function Avatar(props){
    return (
        <img
            src={props.avatarUrl}
            alt={props.name}
        />
    )
}

function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar {...props}/>
            <div className="UserInfo-name">
                {props.name}
            </div>
        </div>
    )
}

export default class App extends Component {
    render(){
        return (
            <div>
                <Comment {...comment}/>
            </div>

        )
    }
}
