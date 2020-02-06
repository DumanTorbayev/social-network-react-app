import React from 'react';
import Post from "./Post/Post";
import css from './MyPosts.module.css';

const MyPosts = () => {

    let posts = [
        {
            id: 1,
            message: "Lorem Ipsum is simply dummy text of the",
            likesCount: 12,
        },
        {
            id: 2,
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            likesCount: 5,
        },
        {
            id: 3,
            message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            likesCount: 45,
        },
        {
            id: 6,
            message: "И вот я здесь",
            likesCount: 125,
        },
    ];

    let postElements = posts.map( p => <Post likeCount={p.likesCount} message={p.message}/> );

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