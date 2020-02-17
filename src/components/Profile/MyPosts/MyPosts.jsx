import React from 'react';
import Post from "./Post/Post";
import css from './MyPosts.module.scss';

const MyPosts = (props) => {

    let postElements = props.posts.map( p => <Post likeCount={p.likesCount} message={p.message}/> );

    let addPost = () => {
        console.log(newPostElement.current.value);
    };

    let newPostElement = React.createRef();

    return (
        <div className={css.posts}>
            <h4 className={css.title}>My Posts</h4>
            <div className={css.new_posts}>
                <textarea ref={newPostElement} placeholder="Some text"></textarea>
                <button onClick={addPost}>Send</button>
            </div>
            <div className={css.previous_posts}>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts