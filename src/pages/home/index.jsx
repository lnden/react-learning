import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import API from '@/api/api';
import PublicHeader from '@/components/header/index.jsx';
// import './index.less'
// import mixin, { padStr } from '../../utils/mixin';

// @mixin({padStr})
class Home extends Component {

    selectedProList = []; 

    uploadImg = async event => {
        try{
            let formdata = new FormData();
            formdata.append('file',event.target.files[0]);
            let result = await API.uploadImg({data: formdata})
            console.log(result)
        }catch(err){
            console.log(err)
        }
    }
    
    // 提交表单
    sumitForm = () => {
        const {orderSum, name, phoneNo} = this.props.formData;
        let alertTip = '';
        if(!orderSum.toString().length){
            alertTip = '请填写金额';
        }else if(!name.toString().length){
            alertTip = '请填写姓名';
        }else if(!phoneNo.toString().length){
            alertTip = '请填写正确的手机号';
        }else{
            alertTip = '添加数据成功';
            this.props.clearSelected();
            this.props.clearData();
        }
        this.setState({
            alertStatus: true,
            alertTip,
        })
    }

     
    // 关闭弹款
    closeAlert = () => {
        this.setState({
            alertStatus: false,
            alertTip: '',
        })
    }

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

                <div>
                    <p className="common-title">请选择销售的产品</p>
                    <Link to="/production" className="common-select-btn">
                        {
                            this.selectedProList.length ?
                            <ul className="selected-pro-list">
                                {
                                    this.selectedProList.map((item,index)=>{
                                        return <li key={index} className="selected-pro-item ellipsis">{item.product_name}x{item.selectNum}</li>
                                    })
                                }
                            </ul>
                            :
                            '选择产品'
                        }
                    </Link>
                </div>

                <div className="upload-img-con">
                    <p className="common-title">请上传发票凭证</p>
                    <div className="file-lable">
                        <span className="common-select-btn">上传图片</span>
                        <input type="file" onChange={this.uploadImg} />
                    </div>
                    <img className="select-img" alt=""/>
                </div>
                <TouchableOpacity className="submit-btn" clickCallBack={this.sumitForm} text="提交" />
                <PublicAlert closeAlert={this.closeAlert} alertTip={this.state.alertTip} alertStatus={this.state.alertStatus} />
            </main>
        )
    }
}

export default Home