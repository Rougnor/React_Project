import React, { Component } from "react";
import "./PostListItem.css";


class PostListItem extends Component{
   
    render(){

        const {lable, onDel, onToggleImportant, onToggleLike, important, like} = this.props;
        let className = 'app-list-item d-flex justify-content-between';
        if(important){
        className += " important";
        }
        if(like){
            className += " like";
        }
        
        return(
            <div className={className}>
            <span className="app-list-item-label"
            onClick={onToggleLike}>
                {lable}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                type="button" 
                className="btn-star btn-sm"
                onClick={onToggleImportant}>
                    <i className="bi-star-fill"></i>
                </button>
                <button 
                onClick={onDel}
                type="button" 
                className="btn-trash btn-sm">
                    <i className="bi-trash-fill"></i>
                </button>
                <i className="bi-heart-fill"></i>
            </div>
        </div>
        );
    }
}

export default PostListItem;