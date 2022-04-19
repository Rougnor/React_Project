import React, { Component } from "react";
import "./SearchPanel.css";

class SearchPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        };
        this.onUpdateState = this.onUpdateState.bind(this);
    }

    onUpdateState(e){
        const term = e.target.value;
        this.setState({term: term});
        this.props.onUpdateState(term);

    }
    render(){
        return(
            <div className="searc-panel d-flex">
                <input
                    className="form-control search-input"
                    type="text"
                    placeholder="Поиск по записям"
                    onChange={this.onUpdateState}
                />
            </div>
        );
    }
   
};

export default SearchPanel;