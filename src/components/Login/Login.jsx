import React from 'react';
import css from './Login.module.scss'
import {Field, reduxForm} from "redux-form";


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={css.login_page}>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

const LoginForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"} />
            </div>
            <div>
                <Field component={"input"} name={"password"} type={"password"} placeholder={"Password"}/>
            </div>
            <div className={css.login_checkbox}>
                <Field component={"input"} name={"rememberMe"} id="1" type={"checkbox"}/>
                <label htmlFor="1">Remember me</label>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login