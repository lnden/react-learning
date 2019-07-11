import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// //引入react-redux集成
import { Provider } from 'react-redux'
/** 合并redux*/
import store from '@/react-demo/example/redux/index.js'

/**
 *  React之道 TODO-LIST
 *  import App from './study-demo/example/App';
 *  import App from './study-demo/example/components/App';
 *
 *  添加备忘录
 *  import App from './study-demo/example/todolist'
 *
 *  模拟request
 *  import App from './study-demo/example/todolist/Api'
 *
 *  官方基础知识
 *  import App from './study-demo/example/official/..'
 *
 *  React路由4.0
 *  import App from './study-demo/example/router'
 *  import {BrowserRouter,HashRouter} from 'react-router-dom'
 *  <BrowserRouter>
 *      <App />
 *  </BrowserRouter>
 *
 *  生命周期
 *  import App from './study-demo/example/lifecycle'
 *
 *  组件深层次通信 this.context
 *  import App from './study-demo/example/context'
 *  import App from './study-demo/example/context-simple'
 *  import App from './study-demo/example/context-middle'
 *  import App from './study-demo/example/context-complex'
 *
 */

//react学习计划 https://github.com/pacterafe/team-react/blob/master/README.zh-CN.md
// React 哲学
// import App from './study-demo/product/'
// React Tic-Tac-Toe
// import App from './study-demo/tic-tac-toe/'

import App from '@/react-demo/example/redux/redux/index.js'

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

// 结束


ReactDOM.render(
    <Provider store={store}>
        <App products={PRODUCTS}/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

if (module.hot) { module.hot.accept(); }

