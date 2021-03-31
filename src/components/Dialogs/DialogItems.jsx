import React from 'react';
import css from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";

const DialogItems = ({img, name, id}) => {
    let path = '/dialogs/' + id;

    return (
        <div className={css.item}>
            <div className={css.userIcon}>
                <img src={img} alt=""/>
            </div>

            <NavLink className={css.link} activeClassName={css.active} to={path}>{name}</NavLink>
        </div>
    )
};

export default DialogItems