import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Toppest from './components/toppestbar';
import Top from './components/Top';
import TextArea from './components/textArea';
import NoteFeed from './components/noteFeed';
import LeftSideBar from './components/leftSideBar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div className="wrapper">
        <Toppest/>
        <LeftSideBar/>
        <Top/>
        <NoteFeed/>
        <TextArea/>
    </div>, document.getElementById('root'));
registerServiceWorker();
