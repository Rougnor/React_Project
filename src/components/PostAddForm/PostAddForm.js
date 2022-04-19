import React, { Component } from "react";
import "./PostAddForm.css";

class PostAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:''
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(event){
        this.setState({
            text: event.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text:''
        });    
        
    }

    render(){
        return(
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Пиши что хочеш..."
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                        Добавить</button>
            </form>
        );
    }
};

export default PostAddForm;