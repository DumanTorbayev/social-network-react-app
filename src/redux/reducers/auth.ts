export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
    userId: null as null | number,
    login: null as null | string,
    email: null as null | string,
    captcha: null as object | null,
    isAuth: false,
};

type initialState = typeof initialState

const auth = (state = initialState, action: any): initialState => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha,
            };
        default:
            return state;
    }
};

export default auth;