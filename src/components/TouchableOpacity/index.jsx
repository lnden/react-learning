import  React, { Component } from 'react'
import PropTypes from 'prop-types' 

/**
 * @desc 公共按钮组件
 * @param 
 *      clickCallBack   按钮点击函数 func
 *      text    按钮显示文本 string
 *      className 按钮追加的样式 string
 * 
 * @example  <TouchableOpacity className="submit-btn" clickCallBack={this.sumitForm} text="提交" />
 */
export default class TouchableOpacity extends Component {
    static propTypes = {
        clickCallBack: PropTypes.func,
        text: PropTypes.string,
        className: PropTypes.string,
    }

    handleTouchStart = () => {
        this.refs.btn.style.opacity = '0.3'
    }

    handleTouchEnd = () => {
        this.refs.btn.style.opacity = '1'
        this.props.clickCallBack()
    }

    
    render() {
        // console.log('按钮追加过来的style：'+this.props.className)
        return (
            <div className={`btn-con ${this.props.className}`} onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd} ref="btn" >{this.props.text || '确认'}</div>
        )
    }
}