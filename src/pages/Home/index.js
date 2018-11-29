/**
 * @author Lnden
 * @date 2018/11/21
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react';
import CommFooter from '../../components/footer'
import PublicHeader from '../../components/header'
import { Link } from 'react-router-dom'
import './index.css'
import '//at.alicdn.com/t/font_774677_qe314dvetk.js'

const dataList = [
    {
        src:'/public',
        title:'笔记本',
        img:'',
        id:1
    }, {
        src:'/public',
        title:'信用卡还款',
        img:'',
        id:2
    }, {
        src:'/public',
        title:'蚂蚁庄园',
        img:'',
        id:3
    }, {
        src:'/public',
        title:'蚂蚁森林',
        img:'',
        id:4
    }, {
        src:'/public',
        title:'转账',
        img:'',
        id:5
    }, {
        src:'/public',
        title:'充值中心',
        img:'',
        id:6
    }, {
        src:'/public',
        title:'我的快递',
        img:'',
        id:7
    }, {
        src:'/public',
        title:'运动',
        img:'',
        id:8
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
                                        {/*<img src="#" />*/}
                                        <svg className="icon-svg" aria-hidden="true">
                                            <use xlinkHref="#icon-Bank_of_Shanghai"></use>
                                        </svg>
                                        <figcaption>
                                            <span>{val.title}</span>
                                        </figcaption>
                                    </Link>
                                </figure>
                            )
                        })}

                    </article>
                </section>
                <CommFooter />
            </section>
        )
    }
}

export default Home;