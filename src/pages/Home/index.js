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

import DynamicEntry from '../../components/dynamicEntry'
import Banner from '../../components/banner'

class Home extends Component {
    render(){
        return (
            <section>
                <PublicHeader type="首页" />
                <section>
                    <DynamicEntry />
                    <Banner />
                </section>
                <PublicFooter />
            </section>
        )
    }
}

export default Home;