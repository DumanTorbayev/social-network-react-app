import React from 'react';
import {connect} from "react-redux";
import {
    requestUsers,
    follow,
    unFollow,
    requestUsersPage,
} from "../../redux/reducers/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {
    //getBannedUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/users";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsersPage(pageNumber, this.props.pageSize);
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
        users: getUsers(state),
        //users: getBannedUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default connect(mapStateToProps, {
    requestUsers,
    requestUsersPage,
    follow,
    unFollow,
})(UsersContainer);