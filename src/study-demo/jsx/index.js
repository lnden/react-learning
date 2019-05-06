import React, { Component } from 'react'

const list = ['语文', '数学', '英语', '历史', '地理']
const Element = () => {
    return (
        <section>
            <ul>
                {
                    list.map((value,index)=>{
                        return <li>{value}</li>
                    })
                }
            </ul>
        </section>
    )
}


const whetherAdult = true
export default Element