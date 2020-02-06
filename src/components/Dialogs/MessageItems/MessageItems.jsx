import React from 'react';
import css from './../Dialogs.module.scss'

const MessageItems = (props) => {
    return (
        <div className={css.dialog}>
            {props.message}
        </div>
    )
};

export default MessageItems