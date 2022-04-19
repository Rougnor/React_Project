import React from "react";
import PostListItem from '../PostListItem/PostListItem';
import "./PostList.css";

const PostList = ({posts, onDel, onToggleImportant, onToggleLike}) => {

    const elements = posts.map((item) => {
        return(
            <li  key={item.id} className="list-group-item">
                <PostListItem 
                    lable={item.lable} 
                    important={item.important}
                    like={item.like}
                    onDel={() => onDel(item.id)}
                    onToggleImportant = {() => onToggleImportant(item.id)}
                    onToggleLike = {() => onToggleLike(item.id)}
                />
            </li>
        );
    });


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default PostList;