/**
 * @author Lindong Ding
 * @date 2018/12/4
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react'
import PublicHeader from '../../components/header'
import PublicFooter from '../../components/footer'

class Praise extends Component {
    render(){
        return (
            <section>
                <PublicHeader type="口碑"/>
                <section>
                    我是口碑
                </section>
                <PublicFooter />
            </section>
        )
    }
}
export default Praise

