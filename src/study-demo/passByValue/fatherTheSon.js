import React  from 'react'

const personalInfo = {
    name: 'Lucy',
    age: 18,
    sex: 'girl',
    address: 'Beijing',
    work: 'FE',
    team: 'BM1'
}

const Father = () =>
    <section style={{border: '2px solid #f00'}}>
        <div>我是父组件，下面展示的内容是子组件，父组件传递给子组件内容展示</div>
        <Son {...personalInfo} />
    </section>


const Son = (props) => {
    const { name,age,sex,address,work,team } = props
    return (
        <section style={{border: '2px solid #00f'}}>
            <div>我是子组件</div>
            <div style={{color:'#f00'}}>我是通过父组件传递过来的内容</div>
            <article style={{paddingLeft:'20px'}}>
                <p>姓名：{name}</p>
                <p>年龄：{age}</p>
                <p>性别：{sex}</p>
                <p>地址：{address}</p>
                <p>工作：{work}</p>
                <p>团队：{team}</p>
            </article>
            <Grandson parent={{...props}}  father={'This is my father\'s message'} />
        </section>
    )
}


const Grandson = (props) => {
    const { name,age,sex,address,work,team } = props.parent
    const fatherInfo = props.father
    return (
        <section>
            <div>我是孙子组件</div>
            <div style={{color:'#f00'}}>我是通过爷爷组件和父亲组件传递过来的内容</div>
            <article  style={{paddingLeft:'20px'}}>
                <div>我是爷爷组件传递过来的信息</div>
                <p>姓名：{name}</p>
                <p>年龄：{age}</p>
                <p>性别：{sex}</p>
                <p>地址：{address}</p>
                <p>工作：{work}</p>
                <p>团队：{team}</p>
            </article>
            <article  style={{paddingLeft:'20px'}}>
                <div>我是父亲组件传递过来的信息</div>
                <p>{fatherInfo}</p>
            </article>
        </section>
    )
}


export default Father
