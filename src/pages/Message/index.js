/**
 * @author Lnden
 * @date 2018/11/21
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react';
import CommFooter from '../../components/footer'

class Message extends Component {
    render(){
        return (
            <section>
                消息页面
                <CommFooter />
            </section>
        )
    }
}

export default Message;