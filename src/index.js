import ReactDOM from 'react-dom';
import App from './App';
import React from "react";
import {HashRouter} from "react-router-dom";
import reduxStore from "./redux/reduxStore";

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <App state={reduxStore.getState()} reduxStore={reduxStore}/>
    </HashRouter>, document.getElementById('root'));