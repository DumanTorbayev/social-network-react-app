import React from 'react';
import Post from "./Post/Post";
import css from './MyPosts.module.scss';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postElements = props.posts.map( p => <Post likeCount={p.likesCount} key={p.id} message={p.message}/> );

    let onAddNewPost = (values) => {
        props.addPostAction(values.myPost);
    };

    return (
        <div className={css.posts}>
            <h4 className={css.title}>My Posts</h4>
            < AddPostReduxForm onSubmit={onAddNewPost} />
            <div className={css.previous_posts}>
                {postElements}
            </div>
        </div>
    )
};

const AddPostForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div className={css.new_posts}>
                <Field component={"textarea"} name={"myPost"} />
                <button>Send</button>
            </div>
        </form>
    )
};

const AddPostReduxForm = reduxForm({form: 'addPostForm'})(AddPostForm)

export default MyPosts