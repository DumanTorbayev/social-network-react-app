import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";

class LoginContainer extends React.Component {

    render() {
        return (
            <Login captcha={this.props.captcha} isAuth={this.props.isAuth} />
        )
    }
}

let mapStateToProps = state => {
    return {
        captcha: state.auth.captcha,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, null)(LoginContainer);