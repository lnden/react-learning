# React 

This project is more suitable for beginners

也许你现在也和我当初一样迷茫，会一些react的语法，想实战一个项目，不知从何而起。UI框架琳琅满目，我认为学习一门技术，一定要从底层学起，这样以后入手一些UI框架以及封装好的Rudex方案Dva等会更加深入理解，而不是盲目的去会使用！

该库已经非常详细的结合 官方实例、React学习之道、react社区、开源项目 等给出相应的示例展示并且详细备注

- study-demo 为官方实例集合 + React学习之道 详情查看./study-demo/README.md
- src下外层目录为 开源项目的实践 react + react-redux + less + animate + axios + redux-middleware + styled-component + css.module + react-router-dom


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