import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/reducers/usersReducer";

let mapStateToProps = state => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = dispatch => {
    return {
        usersFollow: userId => {
            dispatch(followAC(userId));
        },

        usersUnFollow: userId => {
            dispatch(unFollowAC(userId));
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;