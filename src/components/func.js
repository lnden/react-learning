/**
 * @author Lnden
 * @date 2018/11/13
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */

//搜索ES6组件
class Search extends Component {
    componentDidMount(){
        if(this.input){
            this.input.focus();
        }
    }
    render(){
        const {value,onChange,children,onSubmit } = this.props;
        return (
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    ref={(node)=>{this.input = node}}
                />
                <button type="submit">{children}</button>
            </form>
        )
    }
}

//重构一个无状态搜索组件
function SearchFuncEs(props){
    const { value,onChange,children } = props;
    return (
        <form>
            { children }
            <input type="text" value={value} onChange={onChange}/>
        </form>
    )
}

function SearchFunc({value,onChange,children}){
    return (
        <form>
            { children }
            <input type="text" value={value} onChange={onChange}/>
        </form>
    )
}

const SearchFuncEs6 = ({value,onChange,children}) => {
    return (
        <form>
            { children }
            <input type="text" value={value} onChange={onChange}/>
        </form>
    )
};