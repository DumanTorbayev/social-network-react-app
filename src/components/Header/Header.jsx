import React from 'react';
import css from './header.module.scss';
import {NavLink, Link} from "react-router-dom";
import logo from '../../assets/images/logo.svg'

const Header = (props) => {
    console.log(props);
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
                            props.isAuth ? <div>{props.login}</div> : <Link to={'/login'}>Login</Link>
                        }
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Header
