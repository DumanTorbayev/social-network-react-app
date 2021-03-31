import React from 'react';
import css from './sidebar.module.scss';
import {NavLink} from "react-router-dom";
//import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    //let friends = props.friends.map(f => <Friends name={f.name} key={f.id} id={f.id} img={f.img}/>);

    return (
        <nav className={css.sidebar}>
            <ul className={css.menu}>
                <li><NavLink className={css.item} activeClassName={css.active} to="/dialogs">Messages</NavLink></li>
                <li><NavLink className={css.item} activeClassName={css.active} to="/profile">Profile</NavLink></li>
                <li><NavLink className={css.item} activeClassName={css.active} to="/users">Users</NavLink></li>
            </ul>

            {/*<div className={css.friends}>
                <div className={css.title}>
                    Friends
                </div>
                <div className={css.friendsWrap}>
                    {friends}
                </div>
            </div>*/}
        </nav>
    )
};

export default Sidebar

