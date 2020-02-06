import React from 'react';
import css from './../Dialogs.module.scss'
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={css.item}>
            <NavLink className={css.link} to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItems