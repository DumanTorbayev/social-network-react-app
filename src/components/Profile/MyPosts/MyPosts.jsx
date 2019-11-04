import React from 'react';
import Post from "./Post/Post";
import css from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={css.posts}>
            <div className={css.new_posts}>
                <input type="text" placeholder="Some text"/>
                <button>Send</button>
            </div>
            <div className={css.previous_posts}>
               <Post likeCount="12" message="Lorem Ipsum is simply dummy text of the"/>
               <Post likeCount="3" message="printing and typesetting industry. "/>
               <Post likeCount="7" message="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
            </div>
        </div>
    )
};

export default MyPosts