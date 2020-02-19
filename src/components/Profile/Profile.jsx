import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import css from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={css.profileContainer}>
            <ProfileInfo/>
            <MyPosts
                updateNewPostText={props.updateNewPostText}
                posts={props.profilePage.posts}
                addPost={props.addPost}
            />
        </div>
    )
};

export default Profile