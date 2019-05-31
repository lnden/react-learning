import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// //引入react-redux集成
import { Provider } from 'react-redux'
/** 合并redux*/
import store from './store/merge.js'

/**
 *  React之道 TODO-LIST
 *  import App from './example/App';
 *  import App from './example/components/App';
 *
 *  添加备忘录
 *  import App from './example/todolist'
 *
 *  模拟request
 *  import App from './example/todolist/Api'
 *
 *  官方基础知识
 *  import App from './example/official/..'
 *
 *  React路由4.0
 *  import App from './example/router'
 *  import {BrowserRouter,HashRouter} from 'react-router-dom'
 *  <BrowserRouter>
 *      <App />
 *  </BrowserRouter>
 *
 *  生命周期
 *  import App from './example/lifecycle'
 *
 *  组件深层次通信 this.context
 *  import App from './example/context'
 *  import App from './example/context-simple'
 *  import App from './example/context-middle'
 *  import App from './example/context-complex'
 *
 *  redux 计算器(引用该组件需要注释本页面的其它store)
 *  import App from './example/redux/redux'
 */

//react学习计划 https://github.com/pacterafe/team-react/blob/master/README.zh-CN.md

// import App from './study-demo/component/'
// import App from './study-demo/passByValue/'
// import App from './study-demo/event/'
// import App from './study-demo/jsx/'
// React 哲学
// import App from './study-demo/product/'
// React Tic-Tac-Toe
// import App from './study-demo/tic-tac-toe/'
// Context的使用
import App from './study-demo/css/css-module/index.jsx'

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

// 结束

/** 拆分redux
 *
    import store from './store'
    import { addToCart,updateCart,deleteFromCart } from "./store/actions/cart-actions";
    // console.log('initial state：',store.getState());

    let unsubscribe = store.subscribe(()=>{
    // console.log(store.getState())
    });
    store.dispatch(addToCart('Coffee 500gm',1,250));
    store.dispatch(addToCart('Flour 1kg',2,110));
    store.dispatch(addToCart('Juice 2L',1,250));

    store.dispatch(updateCart('Flour 1kg',5,110));
    store.dispatch(deleteFromCart('Coffee 500gm'));
    unsubscribe();
 *
 */


ReactDOM.render(
    <Provider store={store}>
        <App products={PRODUCTS}/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) { module.hot.accept(); }

