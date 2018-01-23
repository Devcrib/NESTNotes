import React, { Component } from 'react';

export default class TextArea extends Component{
    render(){
        return(
            <div className ="text">
                <textarea className = "content"></textarea>
                <input className="tag" placeholder="Add a tag..."></input>
            </div>
        );
    }
}