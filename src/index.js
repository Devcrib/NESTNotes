import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Top from './components/Top';
import TextArea from './components/text-area';
import NoteFeed from './components/sideBar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div className="wrapper">
        <Top/>
        <NoteFeed/>
        <TextArea/>
    </div>, document.getElementById('root'));
registerServiceWorker();
