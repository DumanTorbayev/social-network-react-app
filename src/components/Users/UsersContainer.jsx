import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPagesAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/reducers/usersReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return <Users
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            users={this.props.users}
            usersUnFollow={this.props.usersUnFollow}
            usersFollow={this.props.usersFollow}
        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);