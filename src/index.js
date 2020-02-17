import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App'
import './index.css'
import './redux/state'
import state from "./redux/state";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<BrowserRouter> <App state={state}/> </BrowserRouter>, document.getElementById('root'));