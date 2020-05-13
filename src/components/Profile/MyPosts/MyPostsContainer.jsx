import React from 'react';
import MyPosts from "./MyPosts";
//import Action Creators
import { addPostAction, updateNewPostTextAction } from "../../../redux/reducers/profileReducer";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addNewPost = () => {
        props.store.dispatch(addPostAction());
    };

    let postChange = (text) => {
        let action = updateNewPostTextAction(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts
            addPost={addNewPost}
            updateNewPostText={postChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
};

export default MyPostsContainer