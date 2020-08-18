import React from 'react';
import {Route, withRouter} from "react-router-dom";
import css from './App.module.scss'
import DialogsContainer from "../Dialogs/DialogsContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";
import LoginContainer from "../Login/LoginContainer";
import {connect} from "react-redux";
import {initializeApp} from "../../redux/actions/app";
import {compose} from "redux";
import {Users, Preloader, Sidebar} from '../index';

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
                    <Sidebar/>
                    <div className={css.content}>
                        <Route path="/dialogs" component={DialogsContainer} />
                        <Route exact path="/profile/:userId?" component={ProfileContainer} />
                        <Route path="/users" component={Users}/>
                        <Route path="/login" component={LoginContainer} />
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