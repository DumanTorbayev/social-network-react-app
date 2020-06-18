import React from 'react';
import {connect} from "react-redux";
import {
    getUsers,
    follow,
    unFollow,
    getUsersPage,
} from "../../redux/reducers/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersPage(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> :
                <Users
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    users={this.props.users}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress}
                />}
        </>
    }
}

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

export default connect(mapStateToProps, {
    getUsers,
    getUsersPage,
    follow,
    unFollow,
})(UsersContainer);