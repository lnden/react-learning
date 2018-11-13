/**
 * @author Lnden
 * @date 2018/11/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

import React, { Component } from 'react'
import Button from '../Buttons/demo'

const smallColumn = {
    width:'10%'
};

//表格ES6组件
export default class Table extends Component {
    render(){
        const { list,onDismiss } = this.props;
        return (
            <div className="table">
                {list.map(item=>
                    <div key={item.objectID} className="table-row">
                      <span style={{width:'40%'}}>
                        <a href={item.url}>{item.title}</a>
                      </span>
                        <span style={{width:'30%'}}>{item.author}</span>
                        <span style={smallColumn}>{item.num_comments}</span>
                        <span style={smallColumn}>{item.points}</span>
                        <span style={smallColumn}>
                            <Button
                                onClick={()=>onDismiss(item.objectID)}
                                className="button-inline"

                            >Dismiss</Button>
                      </span>
                    </div>
                )}
            </div>
        )
    }
}