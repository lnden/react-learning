import React ,{Component} from 'react'
import './searchbox.css'

export default class SearchBox extends Component {
    render(){
        return (
            <section className="searchCont">
                <aside className="searchInput"><i></i>
                    <span>0 | </span>
                    <span>文档测试2 | </span>
                    <span>蜻蜓</span>
                </aside>
                <button>搜索</button>
            </section>
        )
    }
}