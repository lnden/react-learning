import React, { Component } from 'react'
import PublicHeader from '@/components/header/index.jsx'
import TouchableOpacity from '@/components/TouchableOpacity/index.jsx'
import PublicAlert from '@/components/alert/index.jsx'
import API from '@/api/api'
import './balance.less'

class BrokeRage extends Component {
    state = {
        applyNum: '',  //输入的金额
        alertStatus: false, //弹框状态
        alertTip: '',   //弹框提示文字
        balance: {  // 可体现金额
            balance:0
        }
    }

    /**
     * 关闭弹框
     */
    closeAlert = () => {
        this.setState({
            alertStatus: false,
            alertTip: '',
        })
    }


    /**
     * 格式化输入数据
     * 格式为微信红包格式：最大 200.00
     * @param  {object} event 事件对象
     */
    handleInput = event => {
        let value = event.target.value;
        if((/^\d*?\.?\d{0,2}?$/gi).test(value)){
            if((/^0+[1-9]+/).test(value)) {
                value = value.replace(/^0+/,'');
            }
            if((/^0{2}\./).test(value)) {
                value = value.replace(/^0+/,'0');
            }
            value = value.replace(/^\./gi,'0.');
            if(parseFloat(value) > 200){
                value = '200.00';
            }
            this.setState({
                applyNum: value
            });
        }
    }

    /**
     * 提交判断条件
     */
    sumitForm = () => {
        let alertTip;
        if(!this.state.applyNum){
            alertTip = '请输入提现金额';
        }else if(parseFloat(this.state.applyNum) > this.state.balance.balance){
            alertTip = '申请提现金额不能大于余额';
        }else{
            alertTip = '申请提现成功';
        }

        this.setState({
            alertStatus: true,
            alertTip,
            applyNum: '',
        })
    }


    // 初始化数据
    initData = async () => {
        try{
            let result = await API.getBalance()
            this.setState({
                balance: result
            })
        }catch(err){
            console.log(err)
        }
    }

    componentDidMount(){
        this.initData()
    }

    render() {
        const { applyNum,balance, alertTip, alertStatus } = this.state
        return (
            <main className="home-container">
                <PublicHeader title="帮助中心" record />
                <section className="broke-main-content">
                    <p className="broke-header">您的可体现金额为：￥{balance.balance}</p>
                    <form className="broke-form">
                        <p>请输入体现金额(元)</p>
                        <p>￥<input type="text" value={applyNum} placeholder="0.00" maxLength="5" onChange={this.handleInput} /></p>
                    </form>
                    <TouchableOpacity className="submit-btn" clickCallBack={this.sumitForm} text="申请提现"/>
                </section>
                <PublicAlert closeAlert={this.closeAlert} alertTip={alertTip} alertStatus={alertStatus} />
            </main>
        )
    }
}

export default BrokeRage;