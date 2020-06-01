import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPagesAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/reducers/usersReducer";

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },

        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count));
        },

        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPagesAC(currentPage))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;