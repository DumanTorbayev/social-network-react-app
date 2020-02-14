import React from 'react';
import css from './../Dialogs.module.scss'

const MessageItems = (props) => {
    return (
        <div className={css.dialog}>
            <span>
                {props.message}
            </span>
        </div>
    )
};

export default MessageItems