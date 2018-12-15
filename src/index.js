import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
 *  import App from './example/official/clock'
 *  import App from './example/official/extends'
 *  import App from './example/official/form'
 *  import App from './example/official/props'
 *  import App from './example/official/render'
 *  import App from './example/official/state'
 *  import App from './example/official/toggle'
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
 */

// import App from './router'
import App from './example/official/event-object'

import * as serviceWorker from './serviceWorker';
// //引入react-redux集成
import { Provider } from 'react-redux'

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

/** 合并redux*/
import store from './store/merge.js'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) { module.hot.accept(); }

