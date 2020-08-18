import React from 'react';
import css from './Login.module.scss'
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../Common/FormsControl/FormsControls";
import {emailValidate, required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/actions/auth";
import {Redirect} from "react-router-dom";


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    if (props.isAuth) return < Redirect to="/profile"/>

    return (
        <div className={css.login_page}>
            <LoginReduxForm captcha={props.captcha} onSubmit={onSubmit}/>
        </div>
    )
};

const LoginForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <Field
                placeholder={"Enter your email"}
                name={"email"}
                component={FormControl('input')}
                validate={[emailValidate, required]}
            />
            <Field
                component={FormControl('input')}
                name={"password"}
                type={"password"}
                placeholder={'Enter your password'}
                validate={[required]}
            />
            <div className={css.login_checkbox}>
                <Field
                    component={FormControl('input')}
                    name={"rememberMe"}
                    id="1"
                    type={"checkbox"}
                />
                <label htmlFor="1">Remember me</label>
            </div>
            {
                props.captcha !== null ?
                    <div className={css.login_captcha}>
                        <Field
                            component={FormControl('input')}
                            name={"captcha"}
                            type={"text"}
                            placeholder={'Enter captcha characters'}
                            validate={[required]}
                            className={css.captcha}
                        />
                        {
                            props.captcha !== null ?
                                <img src={props.captcha.url} alt=""/> : null
                        }
                    </div> :
                    null
            }

            {
                props.error && <div className={css.alert}>
                    {props.error}
                </div>
            }
            <button>Login</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default connect(null, {login})(Login)