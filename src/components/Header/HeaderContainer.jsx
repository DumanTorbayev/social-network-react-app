import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/reducers/authReducer";
import {toggleIsFetching} from "../../redux/reducers/usersReducer";
import {setUserProfile} from "../../redux/reducers/profileReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        authAPI.setAuthUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, login, email);
                    this.props.toggleIsFetching(false);
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )

    }
}

let mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId,
    }
};

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching, setUserProfile})(HeaderContainer)
