import React from 'react';
import css from './Post.module.scss';

const Post = ({likesCount, message}) => {
    return (
        <div className={css.item}>
            <div>
                <img src="logo.svg" alt=""/>
            </div>
            <div>
                 <span>{message}</span>
                <span>Like: {likesCount}</span>
            </div>
        </div>
    )
};

export default Post