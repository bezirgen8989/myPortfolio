import ReactDOM from 'react-dom';
import App from './App';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import reduxStore from "./redux/reduxStore";

ReactDOM.render(
    <BrowserRouter>
        <App state={reduxStore.getState()} reduxStore={reduxStore}/>
    </BrowserRouter>, document.getElementById('root'));