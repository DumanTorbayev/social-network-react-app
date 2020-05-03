import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";
import React from "react";
import store from "./redux/state";
import './index.css';

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);