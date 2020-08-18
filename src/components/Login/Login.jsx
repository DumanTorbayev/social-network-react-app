import React from 'react';
import css from './Login.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/actions/auth";
import {Redirect} from "react-router-dom";
import LoginReduxForm from "./LoginForm";
import {getCaptcha, getIsAuth} from "../../redux/selectors/login";

const Login = () => {
    const captcha = useSelector((state) => getCaptcha(state));
    const isAuth = useSelector((state) => getIsAuth(state));
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
    };

    if (isAuth) return < Redirect to="/profile"/>

    return (
        <div className={css.login_page}>
            <LoginReduxForm captcha={captcha} onSubmit={onSubmit}/>
        </div>
    )
};

export default Login;