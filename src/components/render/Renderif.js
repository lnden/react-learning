/**
 * Create By DingLindong on 2018/3/29
 */
import React from 'react'
import { Component } from 'react'

const isLogin = false;
class Renderif extends Component{
    render(){
        if(isLogin){
            return <div>Logged in</div>
        }else {
            return <div>Logged out</div>
        }
    }
}
export default Renderif