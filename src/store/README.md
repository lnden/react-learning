
使用 redux 进行web页面的状态管理

redux包含三部分

### Action

&emsp;&emsp;修改store数据唯一来源，一般会通过 store.dispath() 将active传到store

```
const ADD_TODO = "ADD_TODO"

{
    type:ADD_TODO,
    payload:'build my first redux app'
}

```
当应用规模越来越大时，建议使用单独的模块或文件来存放action
```
import { ADD_TODO,REMOVE_TODO } from '../actionTypes'
```

可以创建 Action 函数
```
function addTodo(desc){
    return {
        type:ADD_TODO,
        payload:desc
    }
}
```
使用：
```
store.dispath({type:ADD_TODO,payload:desc})

store.dispath(addTodo(desc))
```


### Reducer
&emsp;&emsp;指定了应用状态的变化如何响应actions并发送到store的，记录actions只是描述了有时间发生了这一事实
&emsp;&emsp;reducer就是一个纯函数，接受旧的state和action，返回新的state
```
(previousState,action) => newState
```

开始编写reducer
```
const initialState = {
    todos:[]
}
function todoApp(state = initialState,action){
    switch(action.type){
        case SET_VISIBILITY:
            return Object.assign({},state,{
                visibilityFilter:action.filter
            })
        default:
            return state;
    }
}
```
### Store

&emsp;&emsp;就是把他们联系到一起的对象

```
提供 getState() 方法获取state
提供 dispatch(action) 方法更新state
提供 subscribe(listener) 注册监听器
```


### react-redux

provider

connect


connect()

    mapStateToProps
    mapDispatchToProps
    mergeProps
    options


























































