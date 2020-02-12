import React from 'react';
import Post from "./Post/Post";
import css from './MyPosts.module.css';

const MyPosts = (props) => {

    let postElements = props.posts.map( p => <Post likeCount={p.likesCount} message={p.message}/> );

    return (
        <div className={css.posts}>
            <h4 className={css.title}>My Posts</h4>
            <div className={css.new_posts}>
                <input type="text" placeholder="Some text"/>
                <button>Send</button>
            </div>
            <div className={css.previous_posts}>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts