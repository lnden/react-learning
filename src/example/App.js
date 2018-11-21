import React, { Component } from 'react';
import './App.css';
import { sortBy } from 'lodash'
import classNames from 'classnames'

const SORTS = {
    NONE: list=> list,
    TITLE: list=> sortBy(list,'title'),
    AUTHOR: list=> sortBy(list,'author'),
    COMMENTS: list=> sortBy(list,'num_comments').reverse(),
    POINTS: list=> sortBy(list,'points').reverse()
};


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


const Sort = ({ sortKey,onSort,children,activeSortKey }) =>{
    // const sortClass = ['button-inline'];
    const sortClass = classNames( 'button-inline', { 'button-active': sortKey === activeSortKey } );

    // if(sortKey === activeSortKey){
    //     sortClass.push('button-active')
    // }
    return (
        <Button
            onClick={()=>onSort(sortKey)}
            className={sortClass}
        >
            { children }
        </Button>
    )
};



const smallColumn = {
    width:'10%'
};
//表格ES6组件
class Table extends Component {
    render(){
        const { list,onDismiss,sortKey,onSort,isSortReverse } = this.props;
        const sortedList = SORTS[sortKey](list);
        const reverseSortedList = isSortReverse ? sortedList.reverse() : sortedList
        return (
            <div className="table">
                <div className="table-header">
                    <span style={{ width: '40%' }}>
                        <Sort sortKey={'TITLE'} onSort={onSort} activeSortKey={sortKey}
                        > Title </Sort>
                    </span>
                    <span style={{ width: '30%' }}>
                        <Sort sortKey={'AUTHOR'} onSort={onSort} activeSortKey={sortKey}
                        > Author </Sort>
                    </span>
                    <span style={{ width: '10%' }}>
                        <Sort sortKey={'COMMENTS'} onSort={onSort} activeSortKey={sortKey}
                        > Comments </Sort>
                    </span>
                    <span style={{ width: '10%' }}>
                        <Sort sortKey={'POINTS'} onSort={onSort} activeSortKey={sortKey}
                        > Points </Sort>
                    </span>
                    <span style={{ width: '10%' }}> Archive </span>
                </div>
                {reverseSortedList.map(item =>
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
const Loading = () =>
    <div>
        Loading···
    </div>

function withLoading(Component){
    return function({isLoading,...rest}){
        return isLoading? <Loading /> : <Component { ...rest } />
    }
}
//
// const withLoading = (Component) =>
//     ({ isLoading, ...rest }) =>
//         isLoading ? <Loading /> : <Component { ...rest } />

const ButtonWithLoading = withLoading(Button);

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
          searchTerm:DEFAULT_QUERY,
          results:null,
          searchKey:'',
          error:null,
          isLoading:false,
          sortKey:'NONE',
          isSortReverse:false
      };
      this.onSort = this.onSort.bind(this);

      this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);

      this.onSearchSubmit = this.onSearchSubmit.bind(this);

      this.setSearchTopStories = this.setSearchTopStories.bind(this);
      this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);

      this.onDismiss = this.onDismiss.bind(this);
      this.onSearchChange = this.onSearchChange.bind(this);
  }
    onSort(sortKey){
        const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse
        this.setState({sortKey,isSortReverse})
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
      const { searchTerm,results,searchKey,error,isLoading,sortKey,isSortReverse }  = this.state;
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
                      sortKey={sortKey}
                      isSortReverse={isSortReverse}
                      onSort={this.onSort}
                      onDismiss={this.onDismiss}
                  />
          }
          <div className="interactions">
              <ButtonWithLoading
                isLoading={isLoading}
                onClick={()=>this.fetchSearchTopStories(searchKey,page+1)}
              >
                  More
              </ButtonWithLoading>
              {/*{*/}
                  {/*isLoading ?*/}
                      {/*<Loading />*/}
                  {/*:*/}
                      {/*<Button onClick={()=>this.fetchSearchTopStories(searchKey,page+1)}>*/}
                          {/*More*/}
                      {/*</Button>*/}
              {/*}*/}

          </div>

      </div>
    );
  }
}

export default App;
