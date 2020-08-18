import {toggleIsFetching} from "../actions/users";
import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {SET_CAPTCHA, SET_USER_DATA} from "../reducers/auth";

export const setAuthUserData = (userId, login, email, isAuth) => ({type: SET_USER_DATA, payload: {
        userId, login, email, isAuth
    }});
export const setCaptcha = (captcha) => ({type: SET_CAPTCHA, captcha})

// This is Thunk

export const getAuthUser = () => {

    return (dispatch) => {

        dispatch(toggleIsFetching(true));
        return authAPI.setAuthUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, login, email, true));
                    dispatch(toggleIsFetching(false));
                }
            })
    }
};

export const login = (email, password, rememberMe, captcha) => {

    return (dispatch) => {

        dispatch(toggleIsFetching(true));
        authAPI.login(email, password, rememberMe, captcha)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUser())
                } else if (response.data.resultCode === 10) {
                    dispatch(getCaptcha())
                } else {
                    console.log(response.data.messages)
                    dispatch(stopSubmit('login', {_error: response.data.messages}))
                }
            })
    }
};

export const logout = () => {

    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                    dispatch(setCaptcha(null));
                    dispatch(getAuthUser());
                }
            })
    }
};

export const getCaptcha = () => {
    return (dispatch) => {
        authAPI.setCaptcha()
            .then(data => {
                dispatch(setCaptcha(data))
            })
    }
}