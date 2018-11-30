import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
 *  import App from './example/App';
 *
 *  import App from './example/components/App';
 *
 *  import App from './example/todolist'
 *  import App from './example/todolist/Api'
 *
 *  import App from './example/official/clock'
 *  import App from './example/official/extends'
 *  import App from './example/official/form'
 *  import App from './example/official/props'
 *  import App from './example/official/render'
 *  import App from './example/official/state'
 *  import App from './example/official/toggle'
 *
 *  import App from './example/router'
 */

import App from './router'

import * as serviceWorker from './serviceWorker';

//引入原生redux
import store from './store'
import { addToCart,updateCart,deleteFromCart } from "./store/actions/cart-actions";
//引入react-redux集成
import { Provider } from 'react-redux'

console.log('initial state：',store.getState())

let unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
});
store.dispatch(addToCart('Coffee 500gm',1,250));
store.dispatch(addToCart('Flour 1kg',2,110));
store.dispatch(addToCart('Juice 2L',1,250));

store.dispatch(updateCart('Flour 1kg',5,110));
store.dispatch(deleteFromCart('Coffee 500gm'));

unsubscribe();


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) { module.hot.accept(); }

