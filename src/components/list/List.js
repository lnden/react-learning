/**
 * Create By Ding on 2018/3/29
 */
import React from 'react'


const listDom = [<li>A</li>,<li>B</li>];
const datalist = [1,2,3,4,5];

class List extends React.Component{
    render(){
        return <ul>
            {listDom}
            {datalist.map((value,index)=>{
                return (
                    <li key={index}>{value}</li>
                )
            })}
        </ul>
    }
}
export default List