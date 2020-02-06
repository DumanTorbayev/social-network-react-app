import React from 'react';
import css from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={css.item}>
            <div>
                <img src="logo.svg" alt=""/>
            </div>
            <div>
                 <span>{props.message}</span>
                <span>Like: {props.likeCount}</span>
            </div>
        </div>
    )
};

export default Post