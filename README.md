# React 

This project is more suitable for beginners

该库已经非常详细的结合 官方实例、React学习之道、react社区、开源项目 等给出相应的示例展示并且详细备注

&emsp;&emsp;也许你现在也和我当初一样迷茫，会一些react的语法，想实战一个项目，不知从何而起。UI框架琳琅满目，我认为学习一门技术，一定要从底层学起，这样以后入手一些UI框架以及封装好的Rudex方案Dva等会更加深入理解，而不是盲目的去会使用！

## Catalogs
- src
  - study-demo  为官方实例集合 + React学习之道实例
  - react-init  为 React + react-redux 结合使用
  - react-cnode 为 react + redux Tab滑动实例


2019-07-05
### create-react-app添加修饰符

```
cnpm install babel-plugin-transform-decorators-legacy -D
```
**Babel >= 7.x** 

```
{
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ]
}
```
低版本查看[babel-plugin-transform-decorators-legacy](https://www.npmjs.com/package/babel-plugin-transform-decorators-legacy)


### npm run build 打包构建

在 package.json 添加 "homepage": "./" 打包完成之后点开 public/index.html 文件即可查看页面

如果要放在 github page 页面 需要修改为 "homepage": "/react-init/"


### 添加 postcss-pxtorem 转换rem

```
cnpm install postcss-pxtorem -D
```
 修改 config/webpack.config.js 

 ```
require('postcss-pxtorem')({
    rootValue : 75,
    selectorBlackList  : [], //过滤
    propList   : ['*'],
})
 ```


### 依赖按钮
```
"antd": "^3.19.3",
"classnames": "^2.2.6",
"create-react-class": "^15.6.3",
"fastclick": "^1.0.6",
"node-sass": "^4.12.0",
"prop-types": "^15.7.2",
"react": "^16.8.6",
"react-dom": "^16.8.6",
"react-hot-loader": "^4.11.1",
"react-redux": "^7.0.3",
"react-router-dom": "^5.0.0",
"react-scripts": "3.0.0",
"redux": "^4.0.1",
"redux-devtools-extension": "^2.13.8",
"redux-logger": "^3.0.6",
"redux-promise": "^0.6.0",
"redux-thunk": "^2.3.0",
"styled-components": "^4.2.0"
```