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

let mapDispatchToProps = dispatch => {
    return {
        addPost: () => {
            dispatch(addPostAction())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextAction(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer