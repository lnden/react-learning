/**
 * @author Lnden
 * @date 2018/11/21
 * @desc 该组件使用iconfont的unicode方法使用
 *
 * unicode是字体在网页端最原始的应用方式，特点是：
 *      兼容性最好，支持ie6+，及所有现代浏览器。
 *      支持按字体的方式去动态调整图标大小，颜色等等。
 *      但是因为是字体，所以不支持多色。只能使用平台里单色的图标，就算项目里有多色图标也会自动去色。
 */

import React, { Component } from 'react';
import PublicHeader from '../../components/header'
import PublicFooter from '../../components/footer'
import { Link } from 'react-router-dom'
import './index.css'

const dataList = [
    {
        src:'/public',
        title:'笔记本',
        img:'&#xe605',
        id:1,
        color:'#D71920'
    }, {
        src:'/public',
        title:'信用卡还款',
        img:'&#xe601;',
        id:2,
        color:'#982C30'
    }, {
        src:'/public',
        title:'蚂蚁庄园',
        img:'&#xe60e;',
        id:3,
        color:'#2D2F64'
    }, {
        src:'/public',
        title:'蚂蚁森林',
        img:'&#xe602;',
        id:4,
        color:'#2D2F64'
    }, {
        src:'/public',
        title:'转账',
        img:'&#xe609;',
        id:5,
        color:'#263C73'
    }, {
        src:'/public',
        title:'充值中心',
        img:'&#xe606;',
        id:6,
        color:'#327341'
    }, {
        src:'/public',
        title:'我的快递',
        img:'&#xe617;',
        id:7,
        color:'#521C1D'
    }, {
        src:'/public',
        title:'运动',
        img:'&#xe615;',
        id:8,
        color:'#E9BC41'
    },
];
class Home extends Component {
    render(){
        return (
            <section>
                <PublicHeader type="首页" />
                <section>
                    <article className="al-recommendBox">
                        {dataList.map((val,index)=>{
                            return (
                                <figure className="al-indexRecommendItem" key={val.id}>
                                    <Link to={val.src}>
                                        <i className="iconfont" style={{color:val.color}} dangerouslySetInnerHTML={{ __html: val.img }}></i>
                                        <figcaption>
                                            <span>{val.title}</span>
                                        </figcaption>
                                    </Link>
                                </figure>
                            )
                        })}

                    </article>
                </section>
                <PublicFooter />
            </section>
        )
    }
}

export default Home;