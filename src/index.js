import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";
import React from "react";
import store from "./redux/redux-store";
import './index.css';

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} state={state}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});