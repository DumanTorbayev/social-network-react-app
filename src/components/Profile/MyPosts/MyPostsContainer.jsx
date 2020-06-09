import React from 'react';
import MyPosts from "./MyPosts";
//import Action Creators
import { addPostAction, updateNewPostTextAction } from "../../../redux/reducers/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const MyPostsContainer = connect(mapStateToProps, {addPostAction, updateNewPostTextAction})(MyPosts);

export default MyPostsContainer