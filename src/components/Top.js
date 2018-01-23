import React, { Component } from 'react';
import '../mdi/css/materialdesignicons.min.css';

export default class Top extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="title-bar">
                    NEST Notes
                </div>
                <div className="menu">
                    <div>File
                        <ul className="dropdown" id="file">
                            <li>New Note</li>
                            <li className="divider"></li>
                            <li>Export Notes</li>
                            <li>Print</li>
                            <li className="divider"></li>
                            <li>Preferences</li>
                            <li className="divider"></li>
                            <li>Exit</li>
                        </ul>
                    </div>
                    <div>Edit
                        <ul className="dropdown" id="edit">
                            <li>Undo</li>
                            <li>Redo</li>
                            <li className="divider"></li>
                            <li>Cut</li>
                            <li>Copy</li>
                            <li>Paste</li>
                            <li>Select All</li>
                            <li className="divider"></li>
                            <li>Search Notes</li>
                        </ul>
                    </div>
                    <div>View
                        <ul className="dropdown" id="view">
                            <li>Font Size</li>
                            <li>Font Size</li>
                            <li>Note Display</li>
                            <li>Theme</li>
                            <li>Toggle Full Screen</li>
                        </ul>
                    </div>
                    <div>Window
                        <ul className="dropdown" id="edit">
                            <li>Minimize</li>
                            <li>Close</li>
                        </ul>
                    </div>
                    <div>Help
                        <ul className="dropdown" id="edit">
                            <li>Help & Support</li>
                            <li className="divider"></li>
                            <li>About NESTNotes</li>
                        </ul>
                    </div>
                </div>
                <div className="util-bar">
                    <div className="col1">
                        <i className="mdi mdi-label" title="Tags"></i>
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