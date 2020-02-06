import React from 'react';
import css from './sidebar.module.scss';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className={css.sidebar}>
            <ul className={css.menu}>
                <li><NavLink className={css.item} activeClassName={css.active} to="/news">News</NavLink></li>
                <li><NavLink className={css.item} activeClassName={css.active} to="/dialogs">Messages</NavLink></li>
                <li><NavLink className={css.item} activeClassName={css.active} to="/music">Music</NavLink></li>
                <li><NavLink className={css.item} activeClassName={css.active} to="/profile">Profile</NavLink></li>
                <li><NavLink className={css.item} activeClassName={css.active} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    )
};

export default Sidebar

