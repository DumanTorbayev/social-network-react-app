import {authAPI} from "../../api/api";
import {toggleIsFetching} from "./usersReducer";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    captcha: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, login, email, isAuth) => ({type: SET_USER_DATA, payload: {
    userId, login, email, isAuth
}});
export  const setCaptcha = (captcha) => ({type: SET_CAPTCHA, captcha})

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

export default authReducer;