import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return (
        <div className={css.item}>
            <div>
                <img src="https://image.flaticon.com/icons/png/512/44/44948.png" alt=""/>
            </div>
            <div>
                 <span>{props.message}</span>
                <span>Like: {props.likeCount}</span>
            </div>
        </div>
    )
};

export default Post