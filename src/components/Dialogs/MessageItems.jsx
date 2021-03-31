import React from 'react';
import css from './Dialogs.module.scss'

const MessageItems = ({message}) => {
    return (
        <div className={css.dialog}>
            <span>
                {message}
            </span>
        </div>
    )
};

export default MessageItems