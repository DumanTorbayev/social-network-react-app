import React from 'react';
import {Route, withRouter} from "react-router-dom";
import css from './App.module.scss'
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import DialogsContainer from "../Dialogs/DialogsContainer";
import SidebarContainer from "../Sidebar/SidebarContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";
import LoginContainer from "../Login/LoginContainer";
import {connect} from "react-redux";
import {initializeApp} from "../../redux/reducers/appReducer";
import {compose} from "redux";
import Preloader from "../Common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className={css.container}>
                <HeaderContainer/>
                <div className={css.contentWrap}>
                    <SidebarContainer/>
                    <div className={css.content}>
                        <Route path="/news"
                               component={News}
                        />
                        <Route path="/dialogs"
                               render={() => <DialogsContainer/>}
                        />
                        <Route path="/music"
                               component={Music}
                        />
                        <Route exact path="/profile/:userId?"
                               render={() => <ProfileContainer/>}
                        />
                        <Route path="/settings"
                               component={Settings}
                        />
                        <Route path="/users"
                               render={() => < UsersContainer/>}
                        />

                        <Route path="/login"
                               render={() => <LoginContainer/>}
                        />
                    </div>
                </div>
                {/*<footer className={css.footer}>
                <div className={css.footerContainer}>Footer</div>
            </footer>*/}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App);