import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";
import React from "react";
import store from "./redux/redux-store";
import './index.css';

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});