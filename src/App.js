import React, { Component } from 'react';
import './App.css';

const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
    {
        title: 'Angular',
        url: 'https://facebook.github.io/angular/',
        author: 'Luvy',
        num_comments: 6,
        points: 9,
        objectID: 2,
    },
];

const Loading = () =>
    <div>
        Loading···
    </div>




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
// function SearchFuncEs(props){
//     const { value,onChange,children } = props;
//     return (
//         <form>
//             { children }
//             <input type="text" value={value} onChange={onChange}/>
//         </form>
//     )
// }
//
// function SearchFunc({value,onChange,children}){
//     return (
//         <form>
//             { children }
//             <input type="text" value={value} onChange={onChange}/>
//         </form>
//     )
// }
//
// const SearchFuncEs6 = ({value,onChange,children}) => {
//     return (
//         <form>
//             { children }
//             <input type="text" value={value} onChange={onChange}/>
//         </form>
//     )
// };



const smallColumn = {
    width:'10%'
};
//表格ES6组件
class Table extends Component {
    render(){
        const { list,onDismiss } = this.props;
        return (
            <div className="table">
                {list.map(item=>
                    <div key={item.objectID} className="table-row">
                      <span style={{width:'40%'}}>
                        <a href={item.url}>{item.title}</a>
                      </span>
                        <span style={{width:'30%'}}>{item.author}</span>
                        <span style={smallColumn}>{item.num_comments}</span>
                        <span style={smallColumn}>{item.points}</span>
                        <span style={smallColumn}>
                            <Button
                                onClick={()=>onDismiss(item.objectID)}
                                className="button-inline"

                            >Dismiss</Button>
                      </span>
                    </div>
                )}
            </div>
        )
    }
}

//按钮ES6组件
class Button extends Component {
    render(){
        const { onClick,className='',children } = this.props;
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



// function isSearched(searchTerm){
//   return function(item){
//       return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '50';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
// const PATH_BASE = 'https://hn.foo.bar.com/api/v1';  //错误请求地址
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

// const URL = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;
// const URL = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}&${PARAM_PAGE}`;

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
          list,
          searchTerm:DEFAULT_QUERY,
          results:null,
          searchKey:'',
          error:null,
          isLoading:false
      };
      this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);

      this.onSearchSubmit = this.onSearchSubmit.bind(this);

      this.setSearchTopStories = this.setSearchTopStories.bind(this);
      this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);

      this.onDismiss = this.onDismiss.bind(this);
      this.onSearchChange = this.onSearchChange.bind(this);
  }

    needsToSearchTopStories(searchTerm) {
      return !this.state.results[searchTerm];
  }


    onSearchSubmit(event){
      const { searchTerm } = this.state;
      this.setState({ searchKey: searchTerm});
      // this.fetchSearchTopStories(searchTerm);
      if (this.needsToSearchTopStories(searchTerm)) {
          this.fetchSearchTopStories(searchTerm);
      }
      event.preventDefault();
  }



  setSearchTopStories(result){
      const { hits,page } = result;
      const { searchKey,results } = this.state;
      const oldHits =  results && results[searchKey] ?  results[searchKey].hits:[];
      const updateHits = [...oldHits,...hits];
      this.setState({
          results:{
              ...results,
              [searchKey]:{hits:updateHits,page}
          },
          isLoading: false
      })
  }
  fetchSearchTopStories(searchTerm,page=0){
      this.setState({ isLoading: true });
      fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
          .then(res=>res.json())
          .then(result=>this.setSearchTopStories(result))
          .catch(e=>this.setState({error:e}))
  }
  componentDidMount(){
      const { searchTerm } = this.state;
      this.setState({searchKey:searchTerm});
      this.fetchSearchTopStories(searchTerm)
  }



  onDismiss(id){
      const { searchKey, results } = this.state;
      const { hits, page } = results[searchKey];
      const updatedHits  = hits.filter(item=>item.objectID!==id);
      this.setState({
          // result:Object.assign({},this.state.result,{ hits:updatedHits})
          result:{
              ...results,
              [searchKey]:{hits:updatedHits,page}
          }
      });
  }
  onSearchChange(event){
    this.setState({searchTerm:event.target.value})
  }



  render() {
      const { searchTerm,results,searchKey,error  }  = this.state;
      const page = (results && results[searchKey] &&results[searchKey].page) || 0;
      const list = ( results && results[searchKey] && results[searchKey].hits ) || [];
      // if(error){
      //     return <p>Something went wrong</p>
      // }
      return (
      <div className="page">
          <div className="interactions">
              <Search
                  value={searchTerm}
                  onChange={this.onSearchChange}
                  onSubmit={this.onSearchSubmit}
              >Search</Search>
          </div>
          {/*{*/}
              {/*result*/}
                  {/*?*/}
                  {/*<Table*/}
                      {/*list={result.hits}*/}
                  {/*pattern={searchTerm}*/}
                  {/*onDismiss={this.onDismiss}*/}
                  {/*/>*/}
                  {/*:*/}
                  {/*null*/}
          {/*}*/}

          {
              error ?
                  <div>
                      <p>Something went wrong</p>
                  </div>
                  :
                  <Table
                      list={list}
                      onDismiss={this.onDismiss}
                  />
          }
          <div className="interactions">
                <Button onClick={()=>this.fetchSearchTopStories(searchKey,page+1)}>
                    More
                </Button>
          </div>

      </div>
    );
  }
}

export default App;
