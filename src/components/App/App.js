import React from 'react';
import {Route} from "react-router-dom";
import css from './App.module.scss'
import Header from '../Header/Header.jsx';
import Sidebar from "../Sidebar/Sidebar.jsx";
import Profile from "../Profile/Profile.jsx";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import DialogsContainer from "../Dialogs/DialogsContainer";

const App = (props) => {
    debugger
    return (
        <div className={css.container}>
            <Header/>
            <div className={css.contentWrap}>
                <Sidebar state={props.state.sidebar}/>
                <div className={css.content}>
                    <Route path="/news"
                           component={News}
                    />
                    <Route path="/dialogs"
                           render={() => <DialogsContainer store={props.store} />}
                    />
                    <Route path="/music"
                           component={Music}
                    />
                    <Route path="/profile"
                           render={() => <Profile store={props.store} />}
                    />
                    <Route path="/settings"
                           component={Settings}
                    />
                </div>
            </div>
            {/*<footer className={css.footer}>
                <div className={css.footerContainer}>Footer</div>
            </footer>*/}
        </div>
    )
};

export default App