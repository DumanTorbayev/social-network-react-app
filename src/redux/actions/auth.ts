import {toggleIsFetching} from "./users";
import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {SET_CAPTCHA, SET_USER_DATA} from "../reducers/auth";

type setAuthUserData = {
    type: typeof SET_USER_DATA,
    payload: {
        userId: number | null
        login: string | null
        email: string | null
        isAuth: boolean
    }
}

type setCaptcha = {
    type: typeof SET_CAPTCHA,
    captcha: object | null
}

export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): setAuthUserData => ({
    type: SET_USER_DATA, payload: {
        userId, login, email, isAuth
    }
});
export const setCaptcha = (captcha: Object | null): setCaptcha => ({type: SET_CAPTCHA, captcha})

// This is Thunk

export const getAuthUser = () => {

    return (dispatch: any) => {

        dispatch(toggleIsFetching(true));
        return authAPI.setAuthUser()
            .then((data: any) => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, login, email, true));
                    dispatch(toggleIsFetching(false));
                }
            })
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: object | null) => {

    return (dispatch: any) => {

        dispatch(toggleIsFetching(true));
        authAPI.login(email, password, rememberMe, captcha)
            .then((response: any) => {
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

export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then((response: any) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
                dispatch(setCaptcha(null));
                dispatch(getAuthUser());
            }
        })
}

export const getCaptcha = () => {
    return (dispatch: any) => {
        authAPI.setCaptcha()
            .then((data: any) => {
                dispatch(setCaptcha(data))
            })
    }
}