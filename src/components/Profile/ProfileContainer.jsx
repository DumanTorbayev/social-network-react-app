import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        usersAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return (
            <Profile {...this.props} userProfile={this.props.userProfile} />
        )
    }
}

let mapStateToProps = state => {
    return {
        userProfile: state.profilePage.userProfile
    }
};

let withRouterContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withRouterContainer);