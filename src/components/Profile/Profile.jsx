import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import css from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={css.profileContainer}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
};

export default Profile