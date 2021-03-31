import React, {useEffect} from 'react';
import {Route} from "react-router-dom";
import css from './App.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "../../redux/actions/app";
import {Users, Preloader, Sidebar, Profile, Login, Header, Dialogs} from '../index';

const App = () => {
    const initialized = useSelector((state) => {
        return state.app.initialized
    })
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeApp());
    }, [])

    return (
        <div>
            {!initialized
                ? <Preloader/>
                : <div className={css.container}>
                    <Header/>
                    <div className={css.contentWrap}>
                        <Sidebar/>
                        <div className={css.content}>
                            <Route path="/dialogs" component={Dialogs}/>
                            <Route exact path="/profile/:userId?" component={Profile}/>
                            <Route path="/users" component={Users}/>
                            <Route path="/login" component={Login}/>
                        </div>
                    </div>
                    {/*<footer className={css.footer}>
                <div className={css.footerContainer}>Footer</div>
            </footer>*/}
                </div>
            }
        </div>
    );
};

export default App;