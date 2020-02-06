import React from 'react';
import css from './header.module.scss';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.container}>
                <NavLink to='/news' className={css.navbarBrand}>
                    <img src="logo.svg" alt=""/>
                    <span>Gazebo</span>
                </NavLink>
            </div>
        </header>
    )
};

export default Header
