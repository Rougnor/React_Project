import React, { Component } from "react";
import style from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm/PostAddForm";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {id: 1, lable: "Good day!", important: false, like: false},
                {id: 2, lable: "Good Mayi!", important: false, like: false},
                {id: 3, lable: "FACKING!", important: false, like: false}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onUpdateState = this.onUpdateState.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 4;

    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            };
        });
    }

    addItem(text){
       const newItem = {
           id: this.maxId++,
           lable: text,
           important: false,
           like: false
       };

       this.setState(({data}) => {
           const newArr = [...data, newItem];
           return {
               data: newArr
           };
       });
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newitem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newitem, ...data.slice(index + 1)];
            return {
                data:newArr
            }
        });
    }

    onToggleLike(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newitem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newitem, ...data.slice(index + 1)];
            return {
                data:newArr
            }
        });
    }

    searchPost(items, term){
        if(term.length === 0){
            return items;
        }
        return items.filter((item) => {
            return item.lable.indexOf(term) >-1;
        });
    }

    onUpdateState(term){
        this.setState({term: term});
    }

    filterPost(item, filter){
        if(filter === 'like'){
            return item.filter(item => item.like);
        }else{
            return item;
        }
    }

    onFilterSelect(filter){
        this.setState({filter});
    }
    
    render(){
        const {data,term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data,term), filter);
        return (
            <div className={style.app}>
                <AppHeader
                    liked = {liked}
                    allPosts = {allPosts}
                />
                <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}
                />
                <SearchPanel
                    onUpdateState={this.onUpdateState}
                />
                <PostList 
                    posts = {visiblePosts}
                    onDel = {this.deleteItem}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleLike = {this.onToggleLike}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
                
            </div>
        );
    }
};

export default App;