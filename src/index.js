import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
// import App from './components/App';
// import App from './todolist'
// import App from './todolist/Api'
import App from './authority/extends'
// import App from './authority/render'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) { module.hot.accept(); }

