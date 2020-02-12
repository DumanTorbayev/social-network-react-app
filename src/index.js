import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App'
import './index.css'
import './redux/state'
import state from "./redux/state";

ReactDOM.render(<App state={state}/>, document.getElementById('root'));