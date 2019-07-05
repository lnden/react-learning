# React 

This project is more suitable for beginners

该项目使用  create-react-app my-app 创建

src/example/..  该目录下是一些react构建的简单demo，包含TODO List、官方demo、以及 router的使用，router使用的是4.0版本 react-router-dom

也许你现在也和我当初一样迷茫，会一些react的语法，想实战一个项目，不知从何而起。UI框架琳琅满目，我认为学习一门技术，一定要从底层学起，这样以后入手一些UI框架以及封装好的Rudex方案Dva等会更加深入理解，而不是盲目的去会使用~！


2019-07-05

### create-react-app添加修饰符

```
cnpm install babel-plugin-transform-decorators-legacy -D
```
** Babel >= 7.x ** 

```
{
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ]
}
```
低版本查看[babel-plugin-transform-decorators-legacy](https://www.npmjs.com/package/babel-plugin-transform-decorators-legacy)