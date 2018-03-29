import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import './index.css';
import App from './App';
import Header from './components/HeaderMo';
import registerServiceWorker from './registerServiceWorker';

/*引入外部组件实例*/
import ComponentAe from './components/ComponentAe'
/*引用外部组件使用props传值*/
import Transmit from './components/Transmit'
/*引入外部组件使用对象方式传值*/
import Objectdata from './components/Objectdata'
/*引入外部组件使用input输入框*/
import Input from './components/Input'
const DataList = {
    job:'web前端开发工程师',
    ing:'努力学习React，争取早日成仙',
    time:'1个月时间自己搭建'
};


function ComponentA() {
    return <h2>Component A组件 我是AA组件</h2>;
}

class ComponentB extends Component{
    render(){
        return <h2>Component B组件 我是BB组件</h2>
    }
}
class ComponentC extends React.Component{
    render(){
        return <h2>ComponentC C组件 我是CC组件</h2>
    }
}


ReactDOM.render(
    <section>
        <App />
        <Header />
        <ComponentA></ComponentA>
        <ComponentB></ComponentB>
        <ComponentC></ComponentC>
        <ComponentAe></ComponentAe>
        <Transmit name='lily' age='26'></Transmit>
        {/*<Objectdata data={DataList}></Objectdata>*/}
        <Objectdata {...DataList}></Objectdata>
        <Input text="阿萨飒飒飒飒"/>
        <h3>hellow ,word</h3>
    </section>,
    document.getElementById('root')

);
registerServiceWorker();
