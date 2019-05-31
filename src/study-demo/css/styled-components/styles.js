import styled,{ keyframes } from 'styled-components'


/**
 *  styled-components使用的方式
 *      1、使用styled定义标签且添加样式
 *      2、styled定义标签内接受组件绑定参数 
 *      3、组件样式继承
 *      4、组件上使用as来切换组件渲染的标签
 *      5、使用伪元素and伪类
 *      6、使用动画Animations
 */

/* 1、使用styled定义标签且添加样式 */
const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    color: red;
    border:1px solid #f00;
`

const Wrapper = styled.section`
    padding: 40px;
    background: white;
    border:1px solid #090;
`

const MainInner = styled.main`
    border: 1px solid #f00;
    margin: 20px;
    h1{
        border: 2px solid #f00;
        margin: 20px;
    }
    .context {
        color: #f00;
    }
`
/* 2、styled定义标签内接受组件绑定参数 */
const Item = styled.li`
    margin: 10px 0;
    padding: 5px 15px;
    list-style: none;
    text-decoration: ${props => props.underline ? 'underline':'none'}
`

/* 3、组件样式继承 */
const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 5px;
`
const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`

/**
 * 4、组件上使用as来切换组件渲染的标签 
 *      1). <Button as="span">被继承按钮的样式</Button>  
 *          <Button as="a" href="/">被继承按钮的样式</Button>  
 *      2)、深层次组件也可以使用
 *      3)、还可以继承其他元素
 */


 /* 5、使用伪元素and伪类 */
const Thing = styled.button`
    color: blue;
    ::before {
        content: '🚀';
    }
    :hover {
        color: red
    }
`

/* 5、使用默认值 */
const Input  = styled.input.attrs(({size})=>({
    /* we can define static props */
    type: "password",
     /* or we can define dynamic ones */
    margin: size || "1em",
    padding: size || "1em"
}))`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

    /* here we use the dynamically computed props */
    margin: ${props => props.margin};
    padding: ${props => props.padding};
`


/* 6、使用动画Animations */

/* 创建动画 */
const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg)
    }
`
/* 创建组件使用动画 */
const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`

export {
    Title,
    Wrapper,
    MainInner,
    Item,
    Button,
    TomatoButton,
    Thing,
    Input,
    Rotate
}