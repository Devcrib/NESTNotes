import React, { Component } from 'react';
import '../mdi/css/materialdesignicons.min.css';

export default class Top extends Component {
    showFirstMenu(){
        document.querySelector('.side-bar-1').classList.add('show');
        document.querySelector('.side-bar-1').classList.remove('hide');
        setTimeout(() => {
            document.querySelector('.side-bar-1 .section-1').style.display = 'block';
            document.querySelector('.side-bar-1 .tags').style.display = 'block';
            document.querySelector('.side-bar-1 .mdi-close').style.display = 'block';
        }, 200);
        document.querySelector('.text').style.opacity = .3;
        document.querySelector('.text').style.width = '39%';
        document.querySelector('.col2').style.width = '39%';
        document.querySelector('.note-feed').style.opacity = .3;
    }

    render() {
        return (
            <div className="top-bar">
                <div className="util-bar">
                    <div className="col1">
                        <i onClick={this.showFirstMenu.bind(this)} className="mdi mdi-label" title="Tags"></i>
                        <input type="text" placeholder="All notes" />
                        <i className="mdi mdi-note-plus" title="New note"></i>
                    </div>
                    <div className="col2">
                        <ul className="icon-menu">
                            <li><i className="mdi mdi-history"></i></li>
                            <li><i className="mdi mdi-export"></i></li>
                            <li><i className="mdi mdi-delete"></i></li>
                            <li><i className="mdi mdi-information-outline"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}