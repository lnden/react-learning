import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter,HashRouter,Route } from 'react-router-dom'

// import App from './App';
// import App from './components/App';
// import App from './todolist'
// import App from './todolist/Api'
// import App from './authority/extends'
import App from './router'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) { module.hot.accept(); }

