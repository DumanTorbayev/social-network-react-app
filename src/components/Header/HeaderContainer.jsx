import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from "axios";
import {setAuthUserData} from "../../redux/reducers/authReducer";
import {toggleIsFetching} from "../../redux/reducers/usersReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, login, email);
                    this.props.toggleIsFetching(false);
                }
            });
    }

    render() {
        return (
            <Header {...this.props} />
        )

    }
}

let mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching})(HeaderContainer)
