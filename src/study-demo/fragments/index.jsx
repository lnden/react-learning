
import React, { Component } from 'react'

const obj = {
    items:[
        {
            term:'名词解释',
            description:'可以详细的介绍一下某些名词的含义'
        },
        {
            term:'曾经沧海难为水，除却巫山不是云',
            description:'下面在这里解释一下上面的语句的含义'
        }
    ]
}

class Table extends Component {
    render() {
        return (
            <section>
                 <table>
                    <tr>
                        <Columns />
                        <ColumnsCopy />
                        <ColumnsSmall /> 
                        
                    </tr>
                </table>
                <ColumnsKey {...obj} />
            </section>
        )
    }
}

function Columns() {
    return (
        <div>
            <td>Hello</td>
            <td>World</td>
        </div>
    )
}

function ColumnsCopy() {
    return (
        <React.Fragment>
            <td>Hello</td>
            <td>World</td>
        </React.Fragment>
    )
}

function ColumnsSmall() {
    return (
        <>
            <td>Hello</td>
            <td>World</td>
        </>
    )
}


function ColumnsKey(props){
    return (
        <dl>
            {props.items.map(items=>(
                <React.Fragment key={items.id}>
                    <dt>{items.term}</dt>
                    <dd>{items.description}</dd>
                </React.Fragment>
            ))}
        </dl>
    )
}
export default Table