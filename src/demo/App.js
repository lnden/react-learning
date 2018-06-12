import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 1111,
        points: 2222,
        objectID: 0,
    },
    {
        title: 'Angular',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3333,
        points: 4444,
        objectID: 1,
    },
    {
        title: 'Vue',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 5555,
        points: 6666,
        objectID: 2,
    }
];

// function isSearched(searchTerm) {
//     return function(item) {
//         return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//     }
// }
const isSearched = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            list,
            searchTerm:''
        };
        this.onDismiss = this.onDismiss.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onDismiss(id){
    //    const updateList = this.state.list.filter(function isNotId(item){
    //        return item.objectID !== id;
    //    });
    //    继续拆分
    //    function isNotId(item){0
    //        return item.objectID !==id;
    //    }
    //    还可以在精简
    //    const isNotId = item => item.objectID !==id;
    //    const updateList = this.state.list.filter(isNotId)
    //    还可以继续精简
    //    下面最精简的实现方式
        const updateList = this.state.list.filter(item=>item.objectID !== id);
        //这里是同步state数据
        this.setState({list:updateList});


    }
    onSearchChange(event){
        this.setState({searchTerm:event.target.value})
    }
    render() {
        const {searchTerm,list}  = this.state;
        return (
            <div className="page">
                <div className="interactions">
                    <Search
                        value={searchTerm}
                        onChange ={this.onSearchChange}
                    />
                </div>
                <Table
                    list={list}
                    pattern={searchTerm}
                    onDismiss={this.onDismiss}
                />
            </div>
        );
    }
}

class Search extends Component {
    render(){
        const {value,onChange,children} = this.props;
        return(
            <form action="">
                {children}
                <input
                    type="text"
                    value={value}
                    onChange ={onChange}
                />
            </form>
        )
    }
}

function SearchBar({value,onChange,children}){
    //const {value,onChange,children} = props;
    return (
        <form action="">
            {children}
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
        </form>
    )
}
//继续简化
const SearchFn = ({value,onChange,children}) =>{
    <form action="">
        {children}
        <input
            type="text"
            value={value}
            onChange={onChange}
        />
    </form>
}



//内联样式还在写在外面
const fontColor = {
    color:'blue'
};
class Table extends Component {
    render(){
        const {list,pattern,onDismiss} = this.props;
        return(
            <div className="table">
                {list.filter(isSearched(pattern)).map(item=>{
                        const onHandleDismiss = () =>
                            this.onDismiss(item.objectID);
                        return (
                            <div key={item.objectID} className="table-row">
                            <span>
                                <a href={item.url}>{item.title}</a>
                            </span>
                                <span style={{ color: '#f00' }}>{item.author}</span>
                                <span style={fontColor}>{item.num_comments}</span>
                                <span>{item.points}</span>
                                <span>
                                    {/*<button*/}
                                        {/*onClick={onHandleDismiss}*/}
                                        {/*type="button"*/}
                                    {/*>*/}
                                        {/*Dismiss*/}
                                    {/*</button>*/}
                                    <Button
                                        onClick={()=>onDismiss(item.objectID)}
                                        className="button-inline"
                                    >
                                        Dismiss
                                    </Button>
                                </span>
                            </div>
                        )
                    }

                )}
            </div>
        )
    }
}

//重构Table
function TableBar({list,pattern,onDismiss} ){
    //const {list,pattern,onDismiss} = props;
    return (
        <div>
            {list.filter(isSearched(pattern)).map(item=>{
                    const onHandleDismiss = () =>
                        this.onDismiss(item.objectID);
                    return (
                        <div key={item.objectID}>
                            <span>
                                <a href={item.url}>{item.title}</a>
                            </span>
                            <span>{item.author}</span>
                            <span>{item.num_comments}</span>
                            <span>{item.points}</span>
                            <span>
                                    {/*<button*/}
                                {/*onClick={onHandleDismiss}*/}
                                {/*type="button"*/}
                                {/*>*/}
                                {/*Dismiss*/}
                                {/*</button>*/}
                                <Button
                                    onClick={()=>onDismiss(item.objectID)}
                                >
                                        Dismiss
                                    </Button>
                                </span>
                        </div>
                    )
                }

            )}
        </div>
    )
}
const TableFn = ({list,pattern,onDismiss}) => {
    <div>
        {list.filter(isSearched(pattern)).map(item=>{
                const onHandleDismiss = () =>
                    this.onDismiss(item.objectID);
                return (
                    <div key={item.objectID}>
                            <span>
                                <a href={item.url}>{item.title}</a>
                            </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                        <span>
                                    {/*<button*/}
                            {/*onClick={onHandleDismiss}*/}
                            {/*type="button"*/}
                            {/*>*/}
                            {/*Dismiss*/}
                            {/*</button>*/}
                            <Button
                                onClick={()=>onDismiss(item.objectID)}
                            >
                                        Dismiss
                                    </Button>
                                </span>
                    </div>
                )
            }

        )}
    </div>
}

class Button extends Component {
    render() {
        const {
            onClick,
            className='',
            children,
        } = this.props;
        return (
            <button
                onClick={onClick}
                className={className}
                type="button"
            >
                {children}
            </button>
        )

    }
}



export default App;
