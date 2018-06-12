import ReactDOM from 'react-dom';
import React from 'react';
import './style/index.css';

import HeaderBar from './components/headerBar/headerbar';
import SearchBox from './components/searchbox/searchbox';
import Navigation from './components/navigation/navigation';

import App from './demo/App';
import Header from './components/HeaderMo';
import registerServiceWorker from './registerServiceWorker';

/*引入外部组件实例*/
//import ComponentAe from './components/ComponentAe'
/*引用外部组件使用props传值*/
// import Transmit from './components/Transmit'
/*引入外部组件使用对象方式传值*/
//import Objectdata from './components/Objectdata'
/*引入外部组件使用input输入框*/
//import Input from './components/Input'
/*引入组件绑定事件onClick*/
//import Event from './components/Event'
/*引入组件state*/
//import Input2 from './components/Input2'
/*条件渲染引用组件*/
//import Renderif from './components/render/Renderif'
/*列表渲染*/
//import List from './components/list/List'

/*引入表单页面*/
//import Form from './components/forms/Form'

/*下面DataList为组件对象方式传递数值*/
// const DataList = {
//     job:'web前端开发工程师',
//     ing:'努力学习React，争取早日成仙',
//     time:'1个月时间自己搭建'
// };


// function ComponentA() {
//     return <h2>Component A组件 我是AA组件</h2>;
// }
//
// class ComponentB extends Component{
//     render(){
//         return <h2>Component B组件 我是BB组件</h2>
//     }
// }
// class ComponentC extends React.Component{
//     render(){
//         return <h2>ComponentC C组件 我是CC组件</h2>
//     }
// }
/*用于三目渲染*/
// const isLogin = true;

ReactDOM.render(
    <section>
        <HeaderBar />
        <SearchBox />
        <Navigation />
        <App />
        <Header />
        {/*<ComponentA></ComponentA>*/}
        {/*<ComponentB></ComponentB>*/}
        {/*<ComponentC></ComponentC>*/}
        {/*<ComponentAe></ComponentAe>*/}
        {/*<Transmit name='lily' age='26'></Transmit>*/}
        {/*/!*<Objectdata data={DataList}></Objectdata>*!/*/}
        {/*<Objectdata {...DataList}></Objectdata>*/}
        {/*<Input text="这里面的内容是不能更改的，使用props传的值"/>*/}
        {/*<h3>hellow ,word</h3>*/}
        {/*<Event></Event>*/}
        {/*<Input2 text="这个是state传值"></Input2>*/}
        {/*/!*<Renderif></Renderif>*!/*/}
        {/*{isLogin ? (<div>Logger in</div>):(<div>Logger out</div>)}*/}
        {/*<List></List>*/}
        {/*<Form></Form>*/}
    </section>,
    document.getElementById('root')

);
registerServiceWorker();
