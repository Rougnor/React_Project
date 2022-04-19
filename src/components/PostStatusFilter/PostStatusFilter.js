import React, { Component } from "react";

class PostStatusFilter extends Component{
    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ];
    }
    render(){
        const buttons = this.buttons.map(({name,label}) => {
            const active = this.props.filter === name;
            const clous = active ? 'btn-info' : 'btn-outline-secondary' 
            return (
                <button 
                    key={name} 
                    type="button" 
                    className={`btn ${clous}`}
                    onClick={() => this.props.onFilterSelect(name)}
                >{label}</button>
            );
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
};

export default PostStatusFilter;