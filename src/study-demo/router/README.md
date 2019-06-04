# React 路由详解

React Router 遵循了React的理念: 万物皆组件。因此BrowserRouter、HashRouter、Route、Link等都是一个普通的组件

- react-router  React Router核心
- react-router-dom  用于DOM绑定的绑定的React Router
- react-router-native   用于React Native的 React Router
- react-router-redux     React Router和Redux的集成
- react-router-config   静态路由配置帮助助手

## 插件的初引入
我们同创在React的使用中，一般要引入两个包，react和react-dom，那么react-router和react-router-dom是不是两个都要应用呢？两个只要应用一个就行了，不同之处就是后者比前者多出了<Link> <BrowserRouter>这样的 DOM 类组件。因此我们只需引用react-router-dom这个包就OK了。当然，如果搭配redux，你还需要使用react-router-redux。

## 主要组件的简介

- BrowserRouter 使用 HTML5 提供的 history API 来保持 UI 和 URL 的同步；
- HashRouter    使用 URL 的 hash (例如：window.location.hash) 来保持 UI 和 URL 的同步；
- Route 
  - Route render methods [RouteRender](./Route.jsx) 
    - <Route component={Home}>
    - <Route render={()=><h3>Title标题</h3>}>
    - <Route children>
  - Route props [RouteProps](./Route-params.jsx) 
    - match
    - location
    - history 
  - path
  - exact
  - strict
  - location.pathname
- Link
- NavLink
- Switch
- Redirect



## 入坑指南

1、使用react路由，引入react-router-dom即可

import { BrowserRouter as Router, Route, Link, NanLink } from 'react-router-dom'

2、BrowserRouter as Router 只允许存在一个子元素[如下实例会报错没有根节点包裹]

```
<Router>
    <ul>
        <li>Link to="/" >首页</Link></li>
    </ul>
    <Route exact path="/" component={Home}/>
</Router>
```