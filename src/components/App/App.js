import React, {Component} from 'react';
import {Route} from "react-router-dom";
import css from './App.module.scss'
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
                <div className={css.contentWrap}>
                    <Sidebar/>
                    <div className={css.content}>
                        <Route path="/news" component={News}/>
                        <Route path="/dialogs" component={Dialogs}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/settings" component={Settings}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App