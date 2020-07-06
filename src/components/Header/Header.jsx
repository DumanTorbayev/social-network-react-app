import React from 'react';
import css from './header.module.scss';
import {NavLink, Link} from "react-router-dom";
import logo from '../../assets/images/logo.svg'
import userPhoto from "../../assets/images/user-picture.png";

const Header = (props) => {
    return (
        <header className={css.header}>
            <div className={css.container}>
                <nav className={css.navbar}>
                    <NavLink to='/' className={css.navbarBrand}>
                        <img src={logo} alt=""/>
                        <span>Gazebo</span>
                    </NavLink>

                    <div className={css.login}>

                        {
                            props.isAuth ?
                                <div className={css.auth_user}>
                                    <div className={css.avatar}>
                                        {/*<img src={props.userAvatar.photos.small !== null ?
                                            props.userAvatar.photos.small :
                                            userPhoto} alt=""/>*/}
                                    </div>
                                    {props.login}
                                    <button onClick={props.logout}>Log out</button>
                                </div> :
                                <Link to={'/login'}>Login</Link>
                        }
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Header
