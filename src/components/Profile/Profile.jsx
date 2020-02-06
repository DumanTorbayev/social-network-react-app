import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import css from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={css.profileContainer}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
};

export default Profile