/**
 * @author Lnden
 * @date 2018/12/4
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React from 'react'
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

const DynamicEntry = () => (
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
);

export default DynamicEntry