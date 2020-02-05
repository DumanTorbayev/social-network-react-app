import React, {Component} from 'react';
import {Route} from "react-router-dom";
import css from './App.module.css'
import Header from '../Header/Header.jsx';
import Sidebar from "../Sidebar/Sidebar.jsx";
import Profile from "../Profile/Profile.jsx";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";

class App extends Component{
    render() {
        return (
            <div className={css.container}>
                <Header/>
                <Sidebar/>
                <div className={css.content}>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        )
    }
}

export default App