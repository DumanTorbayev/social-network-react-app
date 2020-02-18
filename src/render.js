import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import './redux/state';
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

