使用redux进行实战

redux主要包含三个方法
    store
    action
    reducer


### store
&emsp;emsp;store是唯一的状态库，存储所有状态，store包含三个方法

    1.store.getState()
        获取当前的store状态值

    2.store.dispatch(action)
        用户触发store的唯一方法，action是一个对象里面包含type字段以及payload字段（社区规定）

    3.store.subscribe(callback)
        监听store的改变

### action
&emsp;&emsp;action是记录修改state的对象，根据社区规定action对象包含两个对象
{
    type:ADD_TODO,
    payload:'description'
}
每次调用该对象都会写入action对象，我们适当的封装一下

import ADD_TODO from '../actionTypes.js'
function addTodo(desc){
    return {
        type:ADD_TODO,
        payload:desc
    }
}


### reducer
&emsp;&emsp;reducer可以接受previousState、action两个参数返回全新的newState，reducer是一个纯函数
纯函数的概念：
    一个函数的返回结果只依赖于他的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数。
    1).函数外部有一个变量，在函数内部调用，外部修改变量会影响函数内部的值，这就不属于以纯函数
    2).函数外部有一个对象，在函数内部调用，函数内部修改对象的值，会对外部的对象产生影响，他就产生了副作用(可以把外部的变量放在内部使用)

这里又涉及到深拷贝以及浅拷贝的问题！对象获得的只是一个内存地址，而不是真正拷贝，因此存在父对象被篡改的可能。