/**
 * @author Lnden
 * @date 2018/11/21
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react';
import PublicHeader from '../../components/header'
import PublicFooter from '../../components/footer'

class Personal extends Component {
    render(){
        return (
            <section>
                <PublicHeader type="我的" />
                <section>
                    个人中心
                </section>
                <PublicFooter />
            </section>
        )
    }
}

export default Personal;