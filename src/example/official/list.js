import React, { Component } from 'react'

const dataList = () => {
    const numbers = [1,2,3,4,5]
    const doubled = numbers.map(number=>number*2)
    return (
        <section>
            {
                doubled.map((value,index)=>{
                    return <li>键值为：{value} --- 下标为：{index}</li>
                })
            }
        </section>
    )
}




const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
);
const Lists = () => {
    return (
        <section>
            <ul>
                {listItems}
            </ul>
        </section>
    )
}





// export default dataList;
export default Lists;