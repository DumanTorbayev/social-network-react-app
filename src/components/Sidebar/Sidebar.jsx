import React from 'react';
import css from './sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={css.sidebar}>
            <ul className={css.menu}>
                <li><a className={`${css.item} ${css.active}`} href="#">Profile</a></li>
                <li><a className={css.item} href="#">Messages</a></li>
                <li><a className={css.item} href="#">News</a></li>
                <li><a className={css.item} href="#">Music</a></li>
                <li><a className={css.item} href="#">Settings</a></li>
            </ul>
        </nav>
    )
};

export default Sidebar

