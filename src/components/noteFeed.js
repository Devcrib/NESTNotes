import React, { Component } from 'react';

export default class NoteFeed extends Component {
    render(){
        return (
            <div className="note-feed">
                <div className="list-item">
                    <h2 className="title">Title</h2>
                    <h5 className="subtitle">Subtitle</h5>
                </div>
            </div>
        )
    }
}