import React, { Component } from 'react'
import PropTypes from 'prop-types' 
import TouchableOpacity from '@/components/TouchableOpacity/index.jsx'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './index.less'

/**
 * @desc 公共弹框组件
 * @param 
 *      closeAlert   弹框关闭函数 func
 *      alertTip    弹框提示字段 string
 *      alertStatus 弹框是否展示字段 bool
 * 
 * @example <PublicAlert closeAlert={this.closeAlert} alertTip={this.state.alertTip} alertStatus={this.state.alertStatus} />
 */
export default class Alert extends Component {
    static propTypes = {
        closeAlert: PropTypes.func.isRequired,
        alertTip: PropTypes.string.isRequired,
        alertStatus: PropTypes.bool.isRequired,
    }

    // css动画组件设置为目标组件
    FirstChild = props => {
        const childrenArray = React.Children.toArray(props.children);
        return childrenArray[0] || null;
    }

    // 关闭弹框
    confirm = () => {
        this.props.closeAlert();
    }


    render() {
        return (
            <ReactCSSTransitionGroup
                component={this.FirstChild}
                transitionName="alert"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
            {
                this.props.alertStatus && 
                <div className="alert-con">
                    <div className="alert-context">
                        <div className="alert-content-detail">{this.props.alertTip}</div>
                        <TouchableOpacity className="confirm-btn" clickCallBack={this.confirm} />
                    </div>
                </div>
            }
            </ReactCSSTransitionGroup>
        )
    }
}

