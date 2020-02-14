import React from 'react';
import css from './../Dialogs.module.scss'
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={css.item}>
            <div className={css.userIcon}>
                <img src={props.img} alt=""/>
            </div>

            <NavLink className={css.link} activeClassName={css.active} to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItems