# Redux入门浅析



## Redux浅析

### store[createStore]

### Action

### reducer

### store.dispatch(Action)

### store.subscribe()

### combineReducers()

### applyMiddleware()




## middleware介绍

### redux-thunk

### redux-promise

### redux-saga




## React-redux使用

### Provider

### connect()

### mapStateToProps

### mapDispatchToProps


## 目录解析

> 当前目录分为三个 redux 案例

- index.html    // redux 实现原理
- merge.js      // 合并 reducer
- index.js      // 拆分 action
- redux         // redux 加减应用


> ./study-demo/redux 目录

- index.jsx             // redux 应用，分模块介绍
- react-redux.jsx       // react-redux 应用
- redux-logger.jsx      // react-logger 中间件应用
- redux-promise.jsx     // react-promise 中间件应用
- redux-thunk.jsx       // react-thunk 中间件应用