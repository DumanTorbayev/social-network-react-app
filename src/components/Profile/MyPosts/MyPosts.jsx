import React from 'react';
import Post from "./Post/Post";
import css from './MyPosts.module.scss';
//import Action Creators
import {addPost, updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {

    let postElements = props.posts.map( p => <Post likeCount={p.likesCount} message={p.message}/> );

    let newPostElement = React.createRef();

    let addNewPost = () => {
        props.dispatch(addPost());
    };

    let postChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostText(text);
        props.dispatch(action);
    };

    return (
        <div className={css.posts}>
            <h4 className={css.title}>My Posts</h4>
            <div className={css.new_posts}>
                <textarea
                    onChange={postChange}
                    ref={newPostElement}
                    value={props.newPostText}
                />
                <button onClick={addNewPost}>Send</button>
            </div>
            <div className={css.previous_posts}>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts