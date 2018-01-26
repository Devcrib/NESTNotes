import React, { Component } from 'react';

export default class LeftSideBar extends Component {
    closeSideMenu(){
        document.querySelector('.side-bar-1').classList.remove('show');
        document.querySelector('.side-bar-1').classList.add('hide');
        document.querySelector('.side-bar-1 .section-1').style.display = 'none';
        document.querySelector('.side-bar-1 .tags').style.display = 'none';
        document.querySelector('.side-bar-1 .mdi-close').style.display = 'none';
        document.querySelector('.text').style.opacity = 1;
        setTimeout(() => {
            document.querySelector('.col2').style.width = '69%';
            document.querySelector('.text').style.width = '69%';
        }, 200);
        document.querySelector('.note-feed').style.opacity = 1;
    }

    render(){
        return (
            <div className="side-bar-1">
                <i className="mdi mdi-close" onClick={this.closeSideMenu.bind(this)}></i>
                <div className="section-1">
                    <h4><i className="mdi mdi-note-plus"></i> All Notes</h4>
                    <h4><i className="mdi mdi-delete"></i> Trash</h4>
                </div>
                <div className="tags">
                    <h6>TAGS</h6>
                </div>
            </div>
        )
    }
}