/**
 * @author Lnden
 * @date 2018/11/12
 * @desc 文件描述
 * @param {Object} [title]  - 参数说明
 * @example 调用示例
 */
import React, { Component } from 'react';
import './index.css'

import Button from '../Buttons/demo.js'
import Search from '../Search'
import Table from '../Table'
import Loading from '../Loading'

import {
    DEFAULT_QUERY,
    DEFAULT_HPP,
    PATH_BASE,
    PATH_SEARCH,
    PARAM_SEARCH,
    PARAM_PAGE,
    PARAM_HPP, } from '../../constants';

const withLoading = (Component) => ({isLoading,...rest}) =>
    isLoading ? <Loading /> : <Component { ...rest } />

const ButtonWithLoading = withLoading(Button);

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
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
        this.setState({isLoading:true})
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
        const { searchTerm,results,searchKey,error,isLoading  }  = this.state;
        const page = (results && results[searchKey] &&results[searchKey].page) || 0;
        const list = ( results && results[searchKey] && results[searchKey].hits ) || [];
        return (
            <div className="page">
                <div className="interactions">
                    <Search
                        value={searchTerm}
                        onChange={this.onSearchChange}
                        onSubmit={this.onSearchSubmit}
                    >Search</Search>
                </div>
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
                    <ButtonWithLoading
                        isLoading={isLoading}
                        onClick={()=>this.fetchSearchTopStories(searchKey,page+1)}
                    >
                        More
                    </ButtonWithLoading>
                </div>

            </div>
        );
    }
}

export default App;

