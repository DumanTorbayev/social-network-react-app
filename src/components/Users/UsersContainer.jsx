import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPagesAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/reducers/usersReducer";
import UsersAPIComponent from "./UsersAPIComponent";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;