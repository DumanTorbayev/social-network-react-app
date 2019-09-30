import React from 'react';
import './sidebar.css';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="sidebar__menu">
                <li><a className="sidebar__menu__link" href="#">Profile</a></li>
                <li><a className="sidebar__menu__link" href="#">Messages</a></li>
                <li><a className="sidebar__menu__link" href="#">News</a></li>
                <li><a className="sidebar__menu__link" href="#">Music</a></li>
                <li><a className="sidebar__menu__link" href="#">Settings</a></li>
            </ul>
        </nav>
    )
};

export default Sidebar

