import React from 'react';
import Post from "./Post/Post";
import AddPostReduxForm from "./AddPostForm";
import css from './MyPosts.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {addPostAction} from "../../../redux/actions/profile";
import {getPosts} from "../../../redux/selectors/profiles";

const MyPosts = () => {
    const posts = useSelector((state) => getPosts(state))
    const dispatch = useDispatch();

    let onAddNewPost = (values) => {
        dispatch(addPostAction(values.myPost))
    };

    return (
        <div className={css.posts}>
            <h4 className={css.title}>My Posts</h4>
            <AddPostReduxForm onSubmit={onAddNewPost} />
            <div className={css.previous_posts}>
                {posts.map( postData => <Post key={postData.id} {...postData}/> )}
            </div>
        </div>
    )
};

export default MyPosts