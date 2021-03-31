import React from 'react';
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../Common/FormsControl/FormsControls";
import {emailValidate, required} from "../../utils/validators";
import css from "./Login.module.scss";

const LoginForm = ({handleSubmit, captcha, error}) => {
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
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
                {captcha !== null
                    ? <div className={css.login_captcha}>
                        <Field
                            component={FormControl('input')}
                            name={"captcha"}
                            type={"text"}
                            placeholder={'Enter captcha characters'}
                            validate={[required]}
                            className={css.captcha}
                        />
                        {captcha !== null ? <img src={captcha.url} alt=""/> : null}
                    </div>
                    : null
                }
                {error && <div className={css.alert}> {error} </div>}
                <button>Login</button>
            </form>
        </>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
export default LoginReduxForm;