import React from 'react';
import Post from "./Post/Post";
import css from './MyPosts.module.css';

const MyPosts = () => {

    let postData = [
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
    ];

    return (
        <div className={css.posts}>
            <h4 className={css.title}>My Posts</h4>
            <div className={css.new_posts}>
                <input type="text" placeholder="Some text"/>
                <button>Send</button>
            </div>
            <div className={css.previous_posts}>
               <Post likeCount={postData[0].likesCount} message={postData[0].message}/>
               <Post likeCount={postData[1].likesCount} message={postData[1].message}/>
               <Post likeCount={postData[2].likesCount} message={postData[2].message}/>
            </div>
        </div>
    )
};

export default MyPosts