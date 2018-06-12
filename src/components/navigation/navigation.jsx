import React,{Component} from 'react'
import './navigation.css'

export default class Navigation extends Component {
    render(){
        return (
            <nav className="al-indexNavbar"><ul>
                <li className="al-indexNavbarItem active">
                    <a href="#1">
                        <span>热门</span>
                    </a>
                </li>
                <li className="al-indexNavbarItem">
                    <a href="#2">
                        <span>病例</span>
                    </a>
                </li>
                <li className="al-indexNavbarItem">
                    <a href="#3">
                        <span>视频</span>
                    </a>
                </li>
                <li className="al-indexNavbarItem">
                    <a href="#4">
                        <span>会议<i></i></span>
                    </a>
                </li>
                <li className="al-indexNavbarItem">
                    <a href="#5">
                        <span>文库</span>
                    </a>
                </li>
            </ul></nav>
        )
    }
}