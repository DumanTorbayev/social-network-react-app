import React from 'react';
import css from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={css.profileContainer}>
            <ProfileInfo userProfile={props.userProfile}/>
            <MyPostsContainer />
        </div>
    )
};

export default Profile