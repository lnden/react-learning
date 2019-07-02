import React, { Component } from 'react'
import PublicHeader from '@/components/header/index.jsx';
// import './index.less'
// import mixin, { padStr } from '../../utils/mixin';

// @mixin({padStr})
class Home extends Component {

    render() {
        return (
            <main className="home-container">
                <PublicHeader title='首页' record />
                <p className="common-title">请录入您222的信息</p>
                <form className="home-form">
                    <div className="home-form-tiem">
                        <span>销售金额：</span>
                        <input type="text" placeholder="请输入订单金额" />
                    </div>
                    <div className="home-form-tiem">
                        <span>客户姓名：</span>
                        <input type="text" placeholder="请输入客户姓名" />
                    </div>
                    <div className="home-form-tiem">
                        <span>客户电话：</span>
                        <input type="text" maxLength="13" placeholder="请输入客户电话" />
                    </div>
                </form>
            </main>
        )
    }
}

export default Home