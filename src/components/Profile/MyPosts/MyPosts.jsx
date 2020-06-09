import React from 'react';
import Post from "./Post/Post";
import css from './MyPosts.module.scss';

const MyPosts = (props) => {

    let postElements = props.posts.map( p => <Post likeCount={p.likesCount} key={p.id} message={p.message}/> );
    let newPostText = props.newPostText;

    let onAddNewPost = () => {
        props.addPostAction();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostTextAction(text);
    };

    return (
        <div className={css.posts}>
            <h4 className={css.title}>My Posts</h4>
            <div className={css.new_posts}>
                <textarea
                    onChange={onPostChange}
                    value={newPostText}
                />
                <button onClick={onAddNewPost}>Send</button>
            </div>
            <div className={css.previous_posts}>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts