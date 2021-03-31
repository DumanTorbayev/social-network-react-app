import React from 'react';
import css from './header.module.scss';
import {NavLink, Link} from "react-router-dom";
import logo from '../../assets/images/logo.svg'
import {useDispatch, useSelector} from "react-redux";
import {getLogin, getIsAuth} from "../../redux/selectors/auth";
import {logout} from "../../redux/actions/auth";

const Header = () => {
    const login = useSelector((state) => getLogin(state));
    //const userId = useSelector((state) => getUserId(state));
    const isAuth = useSelector((state) => getIsAuth(state));
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <header className={css.header}>
            <div className={css.container}>
                <nav className={css.navbar}>
                    <NavLink to='/' className={css.navbarBrand}>
                        <img src={logo} alt=""/>
                        <span>Gazebo</span>
                    </NavLink>

                    <div className={css.login}>
                        {isAuth
                            ? <div className={css.auth_user}>
                                    {login}
                                    <button onClick={handleLogout}>Log out</button>
                                </div>
                            : <Link to={'/login'}>Login</Link>
                        }
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Header
