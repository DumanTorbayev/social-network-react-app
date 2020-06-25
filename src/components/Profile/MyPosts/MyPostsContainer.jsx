import React from 'react';
import MyPosts from "./MyPosts";
import { addPostAction } from "../../../redux/reducers/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
};

const MyPostsContainer = connect(mapStateToProps, {addPostAction})(MyPosts);

export default MyPostsContainer