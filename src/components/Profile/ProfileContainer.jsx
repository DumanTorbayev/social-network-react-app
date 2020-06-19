import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUsersProfile} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if(!userId) {
            userId = 8734
        }

        this.props.getUsersProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} userProfile={this.props.userProfile} />
        )
    }
}

let mapStateToProps = state => {
    return {
        userProfile: state.profilePage.userProfile,
    }
};

export default compose(
    connect(mapStateToProps, {getUsersProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)