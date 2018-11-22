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

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) { module.hot.accept(); }

