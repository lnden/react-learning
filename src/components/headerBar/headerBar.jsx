
import React,{Component} from 'react'
import './headerBar.css'

class HeaderBar extends Component{
    render(){
        return (
            <header className="al-indexHeader">
                <figure className="al-indexHeaderItem left">
                    <button className="icon-appWakeUp"><span>打开APP</span></button>
                </figure>
                <figure className="al-indexHeaderItem center"><h1>唯医</h1></figure>
                <figure className="al-indexHeaderItem right">
                    <a className="platformChange">
                        <span></span>
                        <span>骨科</span>
                    </a>
                    <section className="ev_switchPlatform">
                        <ul>
                            <li>骨科</li>
                            <li>手外科</li>
                        </ul>
                    </section>
                </figure>
            </header>
        )
    }
}
export default HeaderBar;