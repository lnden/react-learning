import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PublicHeader from '@/components/header/index.jsx'
import { getProData, togSelectPro, editPro } from '@/store/production/action'
import './production.less'

class Production extends Component {
    static propTypes = {
        proData: PropTypes.object.isRequired,
        getProData: PropTypes.func.isRequired,
        togSelectPro: PropTypes.func.isRequired,
        editPro: PropTypes.func.isRequired
    }

    handleEdit = () => {
        console.log('手动触发编辑')
    }
    togSelect = () => {
        console.log('xuanze')
    }

    componentDidMount(){
        if(!this.props.proData.dataList.length){
            this.props.getProData();
        }
    }

    render() {
        return (
            <main>
                <PublicHeader title="产品列表" record />
                <section>
                    <ul>
                        {
                            this.props.proData.dataList.map((item,index)=>{
                                return <li className="pro-item">
                                <div className="pro-item-select" onClick={this.togSelect.bind(this,index)} >
                                    <span className={`icon-select pro-select-status ${item.selectStatus ? 'pro-selected': ''}`}>000</span>
                                    <span className="pro-name">{item.product_name}</span>
                                </div>
                                <div className="pro-item-edit">
                                    <span className={`icon-jian ${item.selectNum > 0 ? 'edit-active': ''}`} onClick={this.hanldeEdit.bind(this,index,-1)}></span>
                                    <span className="pro-num">{item.selectNum}}</span>
                                    <span className={`icon-jia`} onClick={this.handleEdit.bind(this,index,1)}></span>
                                </div>
                            </li>
                            })
                        }
    
                    </ul>
                </section>
            </main>
        )
    }
}


export default connect(state => ({
    proData: state.proData,
  }), {
    getProData, 
    togSelectPro, 
    editPro
  })(Production);