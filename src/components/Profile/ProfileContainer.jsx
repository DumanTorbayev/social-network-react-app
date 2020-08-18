import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUsersProfile, getUserStatus, updateUserStatus} from "../../redux/actions/profile";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

/*class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId) {
                this.props.history.push('/users')
            }
        }

        this.props.getUsersProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                     userProfile={this.props.userProfile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}*/

const ProfileContainer = (props) => {
    let userId = props.match.params.userId;

    useEffect(() =>{

        if (!userId) {
            userId = props.authorizedUserId
            if(!userId) {
                props.history.push('/users')
            }
        }

        props.getUsersProfile(userId);
        props.getUserStatus(userId);
    }, [userId]);

    return (
        <Profile {...props}
                 userProfile={props.userProfile}
                 status={props.status}
                 updateUserStatus={props.updateUserStatus}
        />
    )
};

let mapStateToProps = state => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(mapStateToProps, {getUsersProfile, getUserStatus, updateUserStatus}), //
    withRouter
)(ProfileContainer)